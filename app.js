const newTask = document.querySelector("#newtask input");
const task = document.querySelector("#tasks");
const addTaskBtn = document.querySelector("#add-btn");

addTaskBtn.addEventListener("click", () => {
  if (newTask.value.length == 0) {
    alert("Masukan tugas ada");
  } else {
    task.innerHTML += `
    <div class="tasks">
    <span id="task-result">
     ${newTask.value}
    </span>
     <button class="delete-btn">
            <iconify-icon icon="line-md:trash" width="26" height="26"  style="color: #ffffff"></iconify-icon>
        </button>
    </div>
    `;
    // delete task
    let delTask = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < delTask.length; i++) {
      delTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    // crossing out
    let tasks = document.querySelectorAll(".tasks");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    // clear input if task has been input
    newTask.value = "";
  }
});
