const hre = require("hardhat");

async function main() {
  const RobotsNFT = await hre.ethers.getContractFactory("RobotsNFT");
  const robotsNFT = await RobotsNFT.deploy();

  await robotsNFT.deployed();

  console.log("RobotsNFT deployed to:", robotsNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
