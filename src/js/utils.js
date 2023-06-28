export const sayHello = (text) => {
  return text;
};

const mainContent = document.querySelector(".main");
const taskList = document.querySelector(".todo-list");
const footerContent = document.querySelector(".footer");
const inputTask = document.querySelector(".new-todo");
const checkbox = document.querySelectorAll(".toggle");

export const checkTaskList = () => {
  if (taskList.children.length === 0) {
    mainContent.classList.add("hidden");
    footerContent.classList.add("hidden");
  } else {
    mainContent.classList.remove("hidden");
    footerContent.classList.remove("hidden");
  }
};

// const checkTask = () => {
//   checkbox.addEventListener("change", (event) => {
//     if (event.currentTarget.checked) {
//       alert("checked");
//     } else {
//       alert("not checked");
//     }
//   });
// };

export const newTask = () => {
  inputTask.addEventListener("keyup", () => {
    const keyValue = event.key;
    let task;
    if (keyValue === "Enter") {
      if (inputTask.value === "") {
        alert("El campo no puede estar vacío");
      } else {
        task = inputTask.value.trim();
        inputTask.value = "";

        const li = document.createElement("li");
        const div = document.createElement("div");
        div.classList.add("view");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("toggle");
        const label = document.createElement("label");
        //const labelText = document.createTextNode(task);
        const button = document.createElement("button");
        button.classList.add("destroy");
        const input = document.createElement("input");
        input.classList.add("edit");
        input.value = task;

        taskList.appendChild(li);
        li.appendChild(div);
        div.appendChild(checkbox);
        label.innerText = input.value;
        div.appendChild(label);
        div.appendChild(button);
        li.appendChild(input);

        checkbox.addEventListener("change", (event) => {
          if (event.currentTarget.checked) {
            li.classList.add("completed");
          } else {
            li.classList.remove("completed");
          }
        });

        label.addEventListener("dblclick", () => {
          li.classList.add("editing");
          input.addEventListener("keyup", () => {
            const keyValue = event.key;
            let taskUpdate;
            if (keyValue === "Enter") {
              if (input.value === "") {
                alert("El campo no puede estar vacío");
              } else {
                taskUpdate = input.value;
                label.innerHTML = "";
                label.innerText = taskUpdate;
                taskUpdate = "";
                li.classList.remove("editing");
              }
            }
          });
        });

        checkTaskList();
      }
    }
  });
};
