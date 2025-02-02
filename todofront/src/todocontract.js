import Web3 from "web3";
import contractABI from "./contractABI";


let web3;
let todoContract;
let account;

// Function to initialize Web3 and contract
const initializeWeb3 = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    todoContract = new web3.eth.Contract(contractABI, import.meta.env.VITE_CONTRACT_ADDRESS); 
    try{
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if(accounts.length === 0) {
        console.alert("No account found! Please connect your wallet");
      }
      account = accounts[0];
    }catch{
      console.log("No account found");
    }
   
  } else {
    window.alert("Please install MetaMask!");
  }

};

// Function for adding  task 
const addTask = async (taskDescription) => {
  try {
    const response = await todoContract.methods.adTask(taskDescription).send({ from: account}); 
    console.log("Task Added:", response);
    }catch (error) {
    console.error("Error adding task:", error);
  }
};

// Function for loading task
const loadTasks = async () => {
  try {
    const taskSerial = await todoContract.methods.taskSerial().call();
    const taskSerialNumber = Number(taskSerial);
    console.log("Task Serial is: ", taskSerialNumber);
    const taskList = [];

    for (let i = 1; i <= taskSerialNumber; i++) {
        let task = await todoContract.methods.getTask(i).call();

      taskList.push({
        id: i,
        description: task[0],  
        status: Number(task[1]) === 0 ? 'Pending' : 'Completed'
      });
    }
    
    return taskList;
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
};

initializeWeb3();

export { addTask, loadTasks };
