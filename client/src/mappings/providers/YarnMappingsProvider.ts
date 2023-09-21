import {extractTinyMappings, profiler, profilerDel} from "./ProviderUtils";
import {parseTinyFile} from "./TinyMappings";
import {HttpStatusCode} from "../../server/CrashyServer";
import {MappingsFilter} from "../MappingsFilter";
import {Mappings} from "../Mappings";
import {httpGet} from "../../fudge-lib/methods/Http";
import {HashSet} from "../../fudge-lib/collections/hashmap/HashSet";


export async function getYarnMappings(build: string, filter: MappingsFilter): Promise<Mappings> {
    profiler("Downloading Yarn Mappings");
    const domain = "https://maven.fabricmc.net"
    const res = await httpGet({url: `${domain}/net/fabricmc/yarn/${build}/yarn-${build}-v2.jar`});

    profilerDel("Downloading Yarn Mappings");

    const unzipped = await extractTinyMappings(res);
    return parseTinyFile(unzipped, filter);
}

export interface YarnBuild {
    gameVersion: string;
    separator: string;
    build: number;
    maven: string;
    version: string;
    stable: boolean;
}

const YarnApiEntrypoint = "https://meta.fabricmc.net/v2/versions/yarn/"

export async function getYarnBuilds(minecraftVersion: string): Promise<YarnBuild[]> {
    const response = await httpGet({url: YarnApiEntrypoint + minecraftVersion});
    if (response.status !== HttpStatusCode.OK) {
        throw new Error(`Failed to get yarn versions for ${minecraftVersion}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(await response.text());
}

const yarnUnsupportedMinecraftVersions = HashSet.of(
    "18w48b","18w48a","18w47b","18w47a","18w46a","18w45a","18w44a","18w43c","18w43b","18w43a","1.13.2","1.13.2-pre2","1.13.2-pre1","1.13.1","1.13.1-pre2","1.13.1-pre1","18w33a","18w32a","18w31a","18w30b","18w30a","1.13","1.13-pre10","1.13-pre9","1.13-pre8","1.13-pre7","1.13-pre6","1.13-pre5","1.13-pre4","1.13-pre3","1.13-pre2","1.13-pre1","18w22c","18w22b","18w22a","18w21b","18w21a","18w20c","18w20b","18w20a","18w19b","18w19a","18w16a","18w15a","18w14b","18w14a","18w11a","18w10d","18w10c","18w10b","18w10a","18w09a","18w08b","18w08a","18w07c","18w07b","18w07a","18w06a","18w05a","18w03b","18w03a","18w02a","18w01a","17w50a","17w49b","17w49a","17w48a","17w47b","17w47a","17w46a","17w45b","17w45a","17w43b","17w43a","1.12.2","1.12.2-pre2","1.12.2-pre1","1.12.1","1.12.1-pre1","17w31a","1.12","1.12-pre7","1.12-pre6","1.12-pre5","1.12-pre4","1.12-pre3","1.12-pre2","1.12-pre1","17w18b","17w18a","17w17b","17w17a","17w16b","17w16a","17w15a","17w14a","17w13b","17w13a","17w06a","1.11.2","1.11.1","16w50a","1.11","1.11-pre1","16w44a","16w43a","16w42a","16w41a","16w40a","16w39c","16w39b","16w39a","16w38a","16w36a","16w35a","16w33a","16w32b","16w32a","1.10.2","1.10.1","1.10","1.10-pre2","1.10-pre1","16w21b","16w21a","16w20a","1.9.4","1.9.3","1.9.3-pre3","1.9.3-pre2","1.9.3-pre1","16w15b","16w15a","16w14a","1.RV-Pre1","1.9.2","1.9.1","1.9.1-pre3","1.9.1-pre2","1.9.1-pre1","1.9","1.9-pre4","1.9-pre3","1.9-pre2","1.9-pre1","16w07b","16w07a","16w06a","16w05b","16w05a","16w04a","16w03a","16w02a","15w51b","15w51a","15w50a","15w49b","1.8.9","15w49a","15w47c","15w47b","15w47a","15w46a","15w45a","15w44b","15w44a","15w43c","15w43b","15w43a","15w42a","15w41b","15w41a","15w40b","15w40a","15w39c","15w39b","15w39a","15w38b","15w38a","15w37a","15w36d","15w36c","15w36b","15w36a","15w35e","15w35d","15w35c","15w35b","15w35a","15w34d","15w34c","15w34b","15w34a","15w33c","15w33b","15w33a","15w32c","15w32b","15w32a","15w31c","15w31b","15w31a","1.8.8","1.8.7","1.8.6","1.8.5","1.8.4","15w14a","1.8.3","1.8.2","1.8.2-pre7","1.8.2-pre6","1.8.2-pre5","1.8.2-pre4","1.8.2-pre3","1.8.2-pre2","1.8.2-pre1","1.8.1","1.8.1-pre5","1.8.1-pre4","1.8.1-pre3","1.8.1-pre2","1.8.1-pre1","1.8","1.8-pre3","1.8-pre2","1.8-pre1","14w34d","14w34c","14w34b","14w34a","14w33c","14w33b","14w33a","14w32d","14w32c","14w32b","14w32a","14w31a","14w30c","14w30b","14w30a","14w29b","14w29a","14w28b","14w28a","14w27b","14w27a","14w26c","14w26b","14w26a","14w25b","14w25a","14w21b","14w21a","14w20b","14w20a","1.7.10","1.7.10-pre4","1.7.10-pre3","1.7.10-pre2","1.7.10-pre1","14w19a","14w18b","14w18a","14w17a","14w11b","1.7.9","1.7.8","1.7.7","1.7.6","14w11a","1.7.6-pre2","1.7.6-pre1","14w10c","14w10b","14w10a","14w08a","1.7.5","14w07a","14w06b","14w06a","14w05b","14w05a","14w04b","14w04a","14w03b","14w03a","14w02c","14w02b","14w02a","1.7.4","1.7.3","13w49a","13w48b","13w48a","13w47e","13w47d","13w47c","13w47b","13w47a","1.7.2","1.7.1","1.7","13w43a","13w42b","13w42a","13w41b","13w41a","13w39b","13w39a","13w38c","13w38b","13w38a","1.6.4","13w37b","1.6.3","13w37a","13w36b","13w36a","1.6.2","1.6.1","1.6","13w26a","13w25c","13w25b","13w25a","13w24b","13w24a","13w23b","13w23a","13w22a","13w21b","13w21a","13w19a","13w18c","13w18b","13w18a","13w17a","1.5.2","13w16b","13w16a","1.5.1","1.5","1.4.7","1.4.6","1.4.5","1.4.4","1.4.3","1.4.2","1.4.1","1.4","1.3.2","1.3.1","1.3","1.2.5","1.2.4","1.2.3","1.2.2","1.2.1","1.1","1.0","b1.8.1","b1.8","b1.7.3","b1.7.2","b1.7","b1.6.6","b1.6.5","b1.6.4","b1.6.3","b1.6.2","b1.6.1","b1.6","b1.5_01","b1.5","b1.4_01","b1.4","b1.3_01","b1.3b","b1.2_02","b1.2_01","b1.2","b1.1_02","b1.1_01","b1.0.2","b1.0_01","b1.0","a1.2.6","a1.2.5","a1.2.4_01","a1.2.3_04","a1.2.3_02","a1.2.3_01","a1.2.3","a1.2.2b","a1.2.2a","a1.2.1_01","a1.2.1","a1.2.0_02","a1.2.0_01","a1.2.0","a1.1.2_01","a1.1.2","a1.1.0","a1.0.17_04","a1.0.17_02","a1.0.16","a1.0.15","a1.0.14","a1.0.11","a1.0.5_01","a1.0.4","inf-20100618","c0.30_01c","c0.0.13a","c0.0.13a_03","c0.0.11a","rd-161348","rd-160052","rd-20090515","rd-132328","rd-132211"
)

export function yarnSupportsMcVersion(version: string): boolean {
    return !yarnUnsupportedMinecraftVersions.contains(version);
}