document.getElementById("submitButton").addEventListener("click", addTask);
function addTask(){
    const taskInputVal = document.getElementById("taskInput").value;
    if (taskInputVal){
        const newTask = document.createElement('li');
        newTask.innerText= taskInputVal;
        document.getElementById("taskList").appendChild(newTask)
    
        const deleteButton = document.createElement("button");
        deleteButton.className="button";
        deleteButton.innerText="x";
        newTask.appendChild(deleteButton)
        deleteButton.addEventListener("click", () => taskList.removeChild(newTask));

        document.getElementById('taskInput').value=''
    }
}

