import { TASK_APM_PUBLISH } from "./task-names";
import { task } from "@nomiclabs/buidler/config";
import { BuidlerRuntimeEnvironment } from "@nomiclabs/buidler/types";

// Bare minimum commands required by `publish` to interact with
// the APM contracts

// QUESTION / TODO: Should the buidler aragon CLI support this commands?
// - [x] apm publish <bump> [contract]         Publish a new version of the application
// - [ ] apm extract-functions [contract]      Extract function information from a Solidity file
// - [ ] apm grant [grantees..]                Grant an address permission to create new versions in this package
// - [ ] apm info <apmRepo> [apmRepoVersion]   Get information about a package
// - [ ] apm packages [apmRegistry]            List all packages in the registry
// - [ ] apm version [bump]                    (deprecated) Bump the application version
// - [ ] apm versions [apmRepo]                Shows all the previously published versions of a given repository

task(TASK_APM_PUBLISH, "Publish version to APM")
  .addParam("contentHash", "Content hash of the release")
  .addParam("contractAddress", "Contract address of the release")
  .setAction(taskApmPublish);

/**
 * Publishes a version to APM
 *  - Should NOT be concerned with uploading content,
 *    only interacting with a blockchain
 * [EMPTY] [MOCK]
 * @return APM version
 */
export async function taskApmPublish(
  taskArgs: {
    contentHash: string;
    contractAddress: string;
  },
  env: BuidlerRuntimeEnvironment
): Promise<{ contentUri: string; contractAddress: string }> {
  const { contentHash, contractAddress } = taskArgs;
  const contentUri = `ipfs:${contentHash}`;
  return { contentUri, contractAddress };
}
