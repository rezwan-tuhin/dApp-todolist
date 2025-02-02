// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract TodoList{
    enum Status{Pending, Completed}

    struct Task{
        uint taskId;
        string taskDescription;
        Status status;
    }
    uint public taskSerial;
    mapping (uint => Task) public task;

event taskAdded (uint taskId, string taskDescription);
event taskDeleted (uint taskId);
event taskStatusChanged (uint taksId, Status status);


//Function for adding new task
function adTask(string memory _taskDescription) public {
    taskSerial++;
    task[taskSerial] = Task(taskSerial, _taskDescription, Status.Pending);
    emit taskAdded(taskSerial, _taskDescription);
}

//Function for deleting task
function deleteTask(uint _taskId) public {
    require(_taskId > 0 && _taskId <= taskSerial, "Task Not Found");

    for(uint i = _taskId; i < taskSerial; i++) {
        task[i] = task[i+1];
    }
    delete task[taskSerial];
    emit taskDeleted(_taskId);
}

//Function for changing Task Status
function changeTaskStatus(uint _taskId, Status _taskStatus) public {
    require(_taskId > 0 && _taskId <= taskSerial, "Task Not Found");
    task[_taskId].status = _taskStatus;
    emit taskStatusChanged(_taskId, _taskStatus);
}

//Function for getting task
function getTask (uint _taskId) public view returns (string memory, Status) {
    require (_taskId > 0 && _taskId <= taskSerial, "Task Not Found");

    return (task[_taskId].taskDescription, task[_taskId].status);
}

}