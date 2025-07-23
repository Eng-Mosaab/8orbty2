function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = function () {
    li.classList.toggle("completed");
    checkAllDone();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function checkAllDone() {
  const tasks = document.querySelectorAll("#taskList li");
  const completed = document.querySelectorAll("#taskList li.completed");
  const message = document.getElementById("message");

  if (tasks.length > 0 && tasks.length === completed.length) {
    message.textContent = "عاااش انت كده خلصت كل اللي عليك انهادره ";
  } else {
    message.textContent = "";
  }
}
