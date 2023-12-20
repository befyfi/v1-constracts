import "dotenv/config";
import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";


const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [
            {
                version: "0.8.13",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                    
                },
            },
            
        ],
        
    },
    networks: {
        "scroll": {
            url: "https://rpc.scroll.io/",
            accounts: [`${process.env.PRIVATE_KEY}`],
          },
        "scroll_sepolia": {
        url: "https://sepolia-rpc.scroll.io/",
        accounts: [`${process.env.PRIVATE_KEY}`],
        },
        arbitrumOne: {
            url: `https://arbitrum-one.publicnode.com`,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        arbitrumGoerli: {
            url: `https://arbitrum-goerli.publicnode.com`,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        goerli: {
            url: `https://ethereum-goerli.publicnode.com`,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
         
       
    },
    etherscan: {
        apiKey: {
            scroll: `${process.env.API_KEY_SCROLL_ONLINE}`,
            scroll_sepolia: `${process.env.API_KEY_SCROLL_ONLINE}`,
            arbitrumOne: `${process.env.API_KEY_ARB_ONLINE}`,
            arbitrumGoerli: `${process.env.API_KEY_ARB_GOERLI}`,
            goerli: `${process.env.API_KEY_ETH_GOERLI}`
             },
        customChains: [
       
            {
                network: "scroll",
                chainId: 534352,
                urls: {
                    apiURL: "https://api.scrollscan.dev/api",
                    browserURL: "https://scrollscan.com/",
                },
            },
            {
                network: "scroll_sepolia",
                chainId: 534351,
                urls: {
                    apiURL: "https://sepolia-blockscout.scroll.io/api",
                    browserURL: "https://sepolia-blockscout.scroll.io/",
                },
            },
            {
                network: "arbitrumGoerli",
                chainId: 421613,
                urls: {
                    apiURL: "https://api-goerli.arbiscan.io/api",
                    browserURL: "https://goerli.arbiscan.io/",
                },
            },
            {
                network: "arbitrumOne",
                chainId: 42161,
                urls: {
                    apiURL: "https://api.arbiscan.io/api",
                    browserURL: "https://arbiscan.io/",
                },
            },
            {
                network: "goerli",
                chainId: 5,
                urls: {
                    apiURL: "https://api-goerli.etherscan.io/api",
                    browserURL: "https://goerli.etherscan.io/",
                },
            },
            
        ],
    },
    gasReporter: {},
    contractSizer: {
        runOnCompile: `${process.env.REPORT_SIZE}` == "true",
    },
};

export default config;
