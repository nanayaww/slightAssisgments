const addButton = document.getElementById("add_button");
const allTasks = document.getElementById("alltasks");
const pendingTasks = document.getElementById("pendingtasks");
const completedTasks = document.getElementById("completedtasks");
const taskList = document.getElementById("taskList");
const tasktab = taskList.querySelector(".tasks");

const completedBtn = document.getElementById("completed");
const removeBtn = document.getElementById("remove");

const TheTaskList = [];

// All Event listeners
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  createForm();
});

allTasks.addEventListener("click", (e) => {
  e.preventDefault();
  renderTasks();
});

pendingTasks.addEventListener("click", (e) => {
  e.preventDefault();
  const pendingTaskList = TheTaskList.filter((task) => !task.completed);
  taskList.innerHTML = "";
  renderTasks(pendingTaskList);
  console.log(pendingTaskList);
});

completedTasks.addEventListener("click", (e) => {
  e.preventDefault();

  const completedTaskList = TheTaskList.filter((task) => task.completed);
  taskList.innerHTML = "";
  renderTasks(completedTaskList);
  console.log(completedTaskList);


});

// This function gets the input field details from the form and creates an object with it.
function addTask(title, description, id) {
  const titleValue = title.value.toString();
  const descriptionValue = description.value.toString();
  const idvalue = id;

  class Task {
    constructor(title, desc, id) {
      this.title = title;
      this.desc = desc;
      this.completed = false;
      this.id = id;
    }
  }

  const a_task = new Task(titleValue, descriptionValue, idvalue);
  TheTaskList.push(a_task);
  console.log(TheTaskList);
  renderTasks();
  updateTaskCounts();
}

// Render task function

function renderTasks(t = TheTaskList) {
  taskList.innerHTML = "";
  // Get all existing task IDs
  const existingTasks = Array.from(taskList.querySelectorAll(".tasks")).map(
    (task) => task.getAttribute("data-tab-id")
  );

  // Only render tasks that don't already exist
  t.forEach((task) => {
    if (!existingTasks.includes(task.id.toString())) {
      const a__task = document.createElement("div");
      a__task.setAttribute("class", `tasks ${task.completed}`);
      a__task.setAttribute("id", `task${task.id}`);
      a__task.setAttribute("data-tab-id", task.id);

      const tasktitle = document.createElement("h2");
      tasktitle.setAttribute("id", "task_title");
      tasktitle.textContent = task.title;

      const taskdesc = document.createElement("p");
      taskdesc.setAttribute("id", "task_description");
      taskdesc.textContent = task.desc;

      const taskButtons = document.createElement("div");
      taskButtons.setAttribute("id", "taskButtons");

      const completedButton = document.createElement("button");
      completedButton.setAttribute("class", "completed-btn");

      const removeButton = document.createElement("button");
      removeButton.setAttribute("class", "remove-btn");

      const checkIcon = document.createElement("i");
      checkIcon.setAttribute("class", "material-icons");
      checkIcon.textContent = "check";
      const closeIcon = document.createElement("i");
      closeIcon.setAttribute("class", "material-icons");
      closeIcon.textContent = "close";

      completedButton.appendChild(checkIcon);
      removeButton.appendChild(closeIcon);

      taskButtons.appendChild(completedButton);
      taskButtons.appendChild(removeButton);

      a__task.appendChild(tasktitle);
      a__task.appendChild(taskdesc);
      a__task.appendChild(taskButtons);

      taskList.appendChild(a__task);

      // Completed task button
      completedButton.addEventListener("click", () => {
        toggleTaskFunction(task);
        console.log(task);
      });

      // Remove task Button
      removeButton.addEventListener("click", () => {
        removeTaskFunction(task);
      });
    }
  });
}

// This function creates a pop up form when the add button is clicked
function createForm() {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = `
    <form id="myform" action="">
        
        <div class="formDiv">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" required/>
        </div>
        <div class="formDiv">
          <label for="description">Description</label>
          <textarea type="text" name="description" id="description" required></textarea>
        </div>

        <div class="formDiv" id="formButtons">
          <button id="submit">Submit</button>
        <button id="closeForm">Close</button>
        </div>
        
      </form>
    `;

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (title.value.trim() === "" || description.value.trim() === "") {
      alert('Fields are required');
      return;
    }
    const id = TheTaskList.length;
    addTask(title, description, id);
    formContainer.innerHTML = ``;
  });

  const closeButton = document.getElementById("closeForm");
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();

    const myform = document.getElementById("myform");
    formContainer.removeChild(myform);
  });
}


function removeTaskFunction(task) {
  const index = TheTaskList.findIndex((t) => t.id === task.id);
  if (index !== -1) {
    TheTaskList.splice(index, 1);
    renderTasks();
    updateTaskCounts();
  }
}

// Toggle Task function
function toggleTaskFunction(task) {
  task.completed = !task.completed

  renderTasks();
  updateTaskCounts();
}

// This function increments or decrements the pending tasks

function updateTaskCounts() {
  const pendingCount = TheTaskList.filter((task) => !task.completed).length;
  const completedCount = TheTaskList.filter((task) => task.completed).length;

  // Update the display
  pendingTasks.textContent = `Pending Tasks (${pendingCount})`;
  completedTasks.textContent = `Completed Tasks (${completedCount})`;
}
