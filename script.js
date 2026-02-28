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