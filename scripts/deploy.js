const hre = require("hardhat"); 

async function main() {
    const Lock = await hre.ethers.getContractFactory("Lock"); 
    const lock = await Lock.deploy(); 

    await lock.deployed(); Lock
    
    console.log(
        `Lock with 1 ETH locked deployed to: ${lock.address}`
    ); 
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
}); 