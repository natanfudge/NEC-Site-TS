import {WithChildren} from "../../../utils/simple/SimpleElementProps";
import {useScreenSize} from "../../../../utils/Gui";
import {Column} from "../../../utils/simple/Flex";
import React, {useState} from "react";
import {MappingsSelection} from "./MappingsSelection";
import {MappingsState, withBuild} from "../../../../mappings/MappingsState";
import {usePromise} from "../../../utils/PromiseBuilder";
import {RichCrashReport} from "crash-parser/src/model/RichCrashReport";
import {DesiredBuild, DesiredBuildProblem, MappingContext} from "../../../../mappings/MappingMethod";
import {buildsOf, useAnyMappingsLoading} from "../../../../mappings/Mappings";
import {namespaceHasMultipleBuildsPerMcVersion} from "../../../../mappings/MappingsNamespace";

export class MappingsController {
    mappingsState: MappingsState
    onMappingsStateChanged: (newState: MappingsState) => void
    // mappings: Mappings
    // minecraftVersion: string
    report: RichCrashReport

    constructor(report: RichCrashReport) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [mappingsState, setMappingsState] = useMappingsState(report.context.minecraftVersion);
        this.mappingsState = mappingsState
        this.onMappingsStateChanged = setMappingsState;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // this.mappings = useMappings(this.mappingsState)
        this.report = report;
    }

    getContext(): MappingContext {
        return {
            desiredBuild: this.mappingsState.build,
            desiredNamespace: this.mappingsState.namespace,
            isDeobfuscated: this.report.deobfuscated,
            loader: this.report.context.loader.type,
            minecraftVersion: this.report.context.minecraftVersion
        }
    }
}


export function WithMappings({controller, children}:
                                 { controller: MappingsController }
                                 & WithChildren) {
    const mappingsLoading = useAnyMappingsLoading();
    return <MappingSelectionLayout selection={
        <MappingsSelection mappingsLoading={mappingsLoading}
                           mappings={controller.mappingsState}
                           onMappingsChange={controller.onMappingsStateChanged}
                           minecraftVersion={controller.report.context.minecraftVersion}/>
    }>
        {children}
    </MappingSelectionLayout>
}

function MappingSelectionLayout({children, selection}: { selection: JSX.Element } & WithChildren) {
    const screen = useScreenSize();
    return screen.isPortrait ? <Column>{selection}{children}</Column> :
        <div style={{width: "100%"}} /*width={"max"}*/>

            {selection}
            {/*<Spacer flexGrow={1}/>*/}
            {children}
        </div>
}

export type MutableMappingsState = [MappingsState, (newState: MappingsState) => void]

export function useMappingsState(minecraftVersion: string): MutableMappingsState {
    // Initially, immediately show a mapping, and since getting what versions are available takes time, we'll set the version to undefined
    // for now and what the available versions load we will set it to the first available one.
    const [state, setState] = useState<MappingsState>(
        {
            namespace: "Yarn",
            build: DesiredBuildProblem.BuildsLoading
        }
    )

    const actualState = withBuild(state, useDetermineBuildToUse(state, minecraftVersion));
    return [actualState, setState];
}

function useDetermineBuildToUse(state: MappingsState, minecraftVersion: string): DesiredBuild {
    const allBuilds = usePromise(buildsOf(state.namespace, minecraftVersion), [state.namespace])

    // If the user has chosen something, use it.
    if (state.build !== DesiredBuildProblem.BuildsLoading) return state.build;
    // If loading...
    if (allBuilds === undefined) return DesiredBuildProblem.BuildsLoading;
    // If finished loading but the user has not chosen anything
    if (allBuilds.length === 0) {
        // Make sure the namespace actually has no builds before returning NoBuildsForNamespace, workaround the fact that allBuilds doesn't update immediately.
        if (namespaceHasMultipleBuildsPerMcVersion(state.namespace)) {
            return DesiredBuildProblem.BuildsLoading;
        } else {
            return DesiredBuildProblem.NoBuildsForNamespace
        }
    } else {
        // Choose the first build automatically
        return allBuilds[0]
    }
}

// export function useMappings(mappingsState: MappingsState): Mappings {
//     const build = mappingsState.build
//     const promise = build !== undefined ? getMappingsCached(IntermediaryToYarnMappingsProvider, build) : EmptyMappings
//     return usePromise(promise, [build]) ?? LoadingMappings;
// }
