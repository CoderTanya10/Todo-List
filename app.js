document.addEventListener("DOMContentLoaded", function () {
  const newTaskInput = document.getElementById("new-task");
  const taskDeadlineInput = document.getElementById("task-deadline");
  const taskCategoryInput = document.getElementById("task-category");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");
  const searchInput = document.getElementById("search");

  addTaskButton.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim();
    const taskDeadline = taskDeadlineInput.value;
    const taskCategory = taskCategoryInput.value.trim();
    if (taskText) {
      addTask(taskText, taskDeadline, taskCategory);
      newTaskInput.value = "";
      taskDeadlineInput.value = "";
      taskCategoryInput.value = "";
    }
  });

  newTaskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });

  searchInput.addEventListener("input", function () {
    filterTasks(searchInput.value.trim());
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-task")) {
      deleteTask(event.target.parentElement);
    }
  });

  function addTask(text, deadline, category) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <span>${text}</span>
            <span class="deadline">${deadline}</span>
            <span class="category">${category}</span>
            <button class="delete-task">X</button>
        `;
    taskList.appendChild(taskItem);
  }

  function deleteTask(taskItem) {
    taskItem.remove();
  }

  function filterTasks(searchTerm) {
    const tasks = taskList.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
      const taskText = tasks[i].querySelector("span").textContent;
      if (taskText.toLowerCase().includes(searchTerm.toLowerCase())) {
        tasks[i].style.display = "block";
      } else {
        tasks[i].style.display = "none";
      }
    }
  }
});
