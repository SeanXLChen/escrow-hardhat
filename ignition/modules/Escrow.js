const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("ethers");

PAYER = "0x30eAbbA97A897D9de29b127162AfDA41619bDb98";
ARBITER_ADDRESS = "0x035102c76A54F5AFD71273900c0232b75427c5F9";
BENEFICIARY_ADDRESS = "0xeF24C0343c04EebAf35b882131F3F1CD65523138";

module.exports = buildModule("EscrowModuleNew", (m) => {
    const deployer = m.getAccount(0);
    const counter = m.contract("Escrow", [ARBITER_ADDRESS, BENEFICIARY_ADDRESS], { value: ethers.parseEther("0.321") }, deployer);
    return { counter };
});