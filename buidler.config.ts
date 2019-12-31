import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";
import waffleDefaultAccounts from "ethereum-waffle/dist/config/defaultAccounts";

import "./tasks/accounts";
import "./tasks/apm";
import "./tasks/dao";
import "./tasks/deploy";
import "./tasks/ipfs";
import "./tasks/publish";
import "./tasks/run";

usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-truffle5");
usePlugin("buidler-typechain");

const INFURA_API_KEY = "";
const RINKEBY_PRIVATE_KEY = "";

const config: BuidlerConfig = {
  solc: {
    version: "0.5.12"
  },
  paths: {
    artifacts: "./build"
  },
  networks: {
    buidlerevm: {
      accounts: waffleDefaultAccounts.map(acc => ({
        balance: acc.balance,
        privateKey: acc.secretKey
      }))
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY]
    }
  },
  defaultNetwork: "buidlerevm",
  typechain: {
    outDir: "typechain",
    target: "ethers"
  }
};

export default config;
