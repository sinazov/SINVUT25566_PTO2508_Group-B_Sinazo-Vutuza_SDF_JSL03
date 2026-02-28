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
