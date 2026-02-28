// ==========================================
// Existing Task Array (Preloaded Tasks)
// ==========================================

const taskBoard = [
  {
    id: 1,
    title: "Master JavaScript",
    description: "Practice daily coding",
    status: "doing"
  },
  {
    id: 2,
    title: "Build Portfolio",
    description: "Create personal projects",
    status: "todo"
  },
  {
    id: 3,
    title: "Learn Git",
    description: "Practice version control",
    status: "done"
  }
];
// ==========================================
// Function: validateTaskStatus
// ==========================================

function validateTaskStatus() {
  let statusInput = prompt("Enter task status (todo, doing, done):").toLowerCase();

  // Keep asking until valid input is entered
  while (
    statusInput !== "todo" &&
    statusInput !== "doing" &&
    statusInput !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    statusInput = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  return statusInput;
}
// ==========================================
// Function: addNewTask
// ==========================================

function addNewTask() {

  // Generate unique incremental ID
  const lastTask = taskBoard[taskBoard.length - 1];
  const newTaskId = lastTask ? lastTask.id + 1 : 1;

  const taskTitle = prompt("Enter task title:");
  const taskDescription = prompt("Enter task description:");
  const taskStatus = validateTaskStatus();

  const newTask = {
    id: newTaskId,
    title: taskTitle,
    description: taskDescription,
    status: taskStatus
  };

  taskBoard.push(newTask);
}
// Allow User to Add Up To 3 New Tasks
// ==========================================

const MAX_NEW_TASKS = 3;
let tasksAddedCount = 0;

while (tasksAddedCount < MAX_NEW_TASKS) {
  addNewTask();
  tasksAddedCount++;
}

// Alert user when limit is reached
alert("There are enough tasks on your board, please check them in the console");