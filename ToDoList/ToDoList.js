const Input = document.getElementById("Input");
const addBtn = document.getElementById("addBtn");
const List = document.getElementById("List");

function addTask() {
    const taskText = Input.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox";
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            li.classList.add("checked");
        } else {
            li.classList.remove("checked");
        }
    });

    // Create a span to hold the task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => {
        List.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    List.appendChild(li);

    Input.value = "";
}

// Add event listener to the Add button
addBtn.addEventListener("click", addTask);
