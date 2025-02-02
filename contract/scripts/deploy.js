const hre = require("hardhat");

async function main() {
    const TodoList = await hre.ethers.getContractFactory("TodoList");

    console.log("Deploying TodoList...");

    const todoList = await TodoList.deploy();

    await todoList.waitForDeployment();

    console.log("TodoList deployed to: ", await todoList.getAddress());
    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })