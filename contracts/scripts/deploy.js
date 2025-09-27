const hre = require("hardhat");

async function main() {
    // Compile the smart contract
    await hre.run('compile');

    // Get the contract factory
    const OATHSupplyChain = await hre.ethers.getContractFactory("OATHSupplyChain");

    // Deploy the contract
    const oathSupplyChain = await OATHSupplyChain.deploy();

    await oathSupplyChain.deployed();

    console.log("OATHSupplyChain deployed to:", oathSupplyChain.address);
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });