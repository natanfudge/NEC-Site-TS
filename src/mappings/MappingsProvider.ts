import {MappingsNamespace} from "./MappingsNamespace";
import {getYarnBuilds, getYarnMappings} from "./YarnMappingsProvider";
import {Mappings} from "./Mappings";

export interface MappingsProvider {
    fromNamespace: MappingsNamespace
    toNamespace: MappingsNamespace
    getBuilds(minecraftVersion: string): Promise<string[]>

    /**
     * The build is the full version name of the mappings, e.g. 1.18.1+build.13
     */
    getMappings(build: string): Promise<Mappings>
}

const YarnToIntermediaryMappingsProvider: MappingsProvider = {
    fromNamespace: "Intermediary",
    toNamespace: "Yarn",
    async getBuilds(minecraftVersion: string): Promise<string[]> {
        const builds = await getYarnBuilds(minecraftVersion)
        return builds.map(build => build.version)
    },
    getMappings(build: string): Promise<Mappings> {
        return getYarnMappings(build)
    }
}

const OfficialToIntermediaryMappingsProvider: MappingsProvider = {
    fromNamespace: "Official",
    toNamespace: "Intermediary",
    async getBuilds(minecraftVersion: string): Promise<string[]> {
        throw new Error("TODO")
    },
    getMappings(build: string): Promise<Mappings> {
        throw new Error("TODO")
    }
}

const OfficialToSrgMappingsProvider: MappingsProvider = {
    fromNamespace: "Official",
    toNamespace: "Srg",
    async getBuilds(minecraftVersion: string): Promise<string[]> {
        throw new Error("TODO")
    },
    getMappings(build: string): Promise<Mappings> {
        throw new Error("TODO")
    }
}

const SrgToMcpMappingsProvider: MappingsProvider = {
    fromNamespace: "Srg",
    toNamespace: "Mcp",
    async getBuilds(minecraftVersion: string): Promise<string[]> {
        throw new Error("TODO")
    },
    getMappings(build: string): Promise<Mappings> {
        throw new Error("TODO")
    }
}

export const mappingsProviders: MappingsProvider[] = [
    YarnToIntermediaryMappingsProvider,
    OfficialToIntermediaryMappingsProvider,
    OfficialToSrgMappingsProvider,
    SrgToMcpMappingsProvider
]