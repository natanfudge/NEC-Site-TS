import {WithChildren} from "../../../utils/simple/SimpleElementProps";
import {useScreenSize} from "../../../../utils/Gui";
import {Column, Row} from "../../../utils/simple/Flex";
import {Spacer} from "../../../utils/simple/SimpleDiv";
import React, {useState} from "react";
import {MappingsSelection} from "./MappingsSelection";
import {MappingsState, withBuild} from "../../../../mappings/MappingsState";
import {buildsOf, MappingContext, useAnyMappingsLoading} from "../../../../mappings/Mappings";
import {usePromise} from "../../../utils/PromiseBuilder";
import {RichCrashReport} from "crash-parser/src/model/RichCrashReport";

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
            minecraftVersion: this.report.context.minecraftVersion,
            desiredNamespace: this.mappingsState.namespace,
            isDeobfuscated: this.report.deobfuscated,
            loader: this.report.context.loader
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
        <Row width={"max"}>
            {children}
            <Spacer flexGrow={1}/>
            {selection}
        </Row>
}

export type MutableMappingsState = [MappingsState, (newState: MappingsState) => void]

export function useMappingsState(minecraftVersion: string): MutableMappingsState {
    // Initially, immediately show a mapping, and since getting what versions are available takes time, we'll set the version to undefined
    // for now and what the available versions load we will set it to the first available one.
    const [state, setState] = useState<MappingsState>(
        {
            namespace: "Yarn",
            build: undefined
        }
    )

    const allBuilds = usePromise(buildsOf(state.namespace, minecraftVersion), [state.namespace])

    const actualState = withBuild(state, state.build ?? allBuilds?.[0]);
    return [actualState, setState];
}

// export function useMappings(mappingsState: MappingsState): Mappings {
//     const build = mappingsState.build
//     const promise = build !== undefined ? getMappingsCached(IntermediaryToYarnMappingsProvider, build) : EmptyMappings
//     return usePromise(promise, [build]) ?? LoadingMappings;
// }
