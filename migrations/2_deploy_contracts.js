const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const ProofOfExistence1 = artifacts.require(
  "../contracts/ProofOfExistence1.sol");
const ProofOfExistence2 = artifacts.require(
  "../contracts/ProofOfExistence2.sol");
  const ProofOfExistence3 = artifacts.require(
    "../contracts/ProofOfExistence3.sol");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(ProofOfExistence1);
  deployer.deploy(ProofOfExistence2);
  deployer.deploy(ProofOfExistence3);
};
