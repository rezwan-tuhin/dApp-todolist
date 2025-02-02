const contractABI =  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "taskDescription",
          "type": "string"
        }
      ],
      "name": "taskAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        }
      ],
      "name": "taskDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "taksId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum TodoList.Status",
          "name": "status",
          "type": "uint8"
        }
      ],
      "name": "taskStatusChanged",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_taskDescription",
          "type": "string"
        }
      ],
      "name": "adTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_taskId",
          "type": "uint256"
        },
        {
          "internalType": "enum TodoList.Status",
          "name": "_taskStatus",
          "type": "uint8"
        }
      ],
      "name": "changeTaskStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_taskId",
          "type": "uint256"
        }
      ],
      "name": "deleteTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_taskId",
          "type": "uint256"
        }
      ],
      "name": "getTask",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "enum TodoList.Status",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "task",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "taskDescription",
          "type": "string"
        },
        {
          "internalType": "enum TodoList.Status",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "taskSerial",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  export default contractABI;