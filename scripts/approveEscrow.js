async function main() {
    const contractAddress = "0x6B2D4C15e5Ea36Cfc44365523B9dd117AaEb9CE4";
    const Contract = await ethers.getContractFactory("Escrow");

    // Attach the deployed contract instance
    const contract = await Contract.attach(contractAddress);

    // Get the list of signers/accounts
    const [owner, arbiter] = await ethers.getSigners();

    // Approve the transaction using the arbiter's account
    const approveTransaction = await contract.connect(arbiter).approve();

    // console.log the transaction hash
    console.log(`Transaction hash: ${approveTransaction.hash}`);
    
    // Wait for the transaction to be mined
    await approveTransaction.wait();

    console.log(`Approved: Funds have been released to the beneficiary.`);
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });