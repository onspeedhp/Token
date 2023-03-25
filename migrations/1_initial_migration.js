const MyToken = artifacts.require("MyToken");

module.exports = (deployer) => {
    deployer.deploy(MyToken, "Token", "LKC", 100000);
};