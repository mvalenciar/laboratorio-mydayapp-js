export const sayHello = (text) => {
  return text;
};

const mainContent = document.querySelector(".main");
const taskList = document.querySelector(".todo-list");
const footerContent = document.querySelector(".footer");
const inputTask = document.querySelector(".new-todo");

export const checkTaskList = () => {
  if (taskList.children.length === 0) {
    mainContent.classList.add("hidden");
    footerContent.classList.add("hidden");
  }
};

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
        taskList.innerHTML += `<li>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>${task}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${task}" />
    </li>`;
      }

      // const li = document.createElement("li");
      // const div = document.createElement("div");
      // //div.classList.add("view");
      // const checkbox = document.createElement("input");
      // checkbox.type = "checkbox";
      // //input.classList.add("toggle");
      // const label = document.createElement("label");
      // const labelText = task;
      // const button = document.createElement("button");
      // //button.classList.add("destroy");
      // const input = document.createElement("input");
      // //input.classList.add("edit");
      // input.value = task;
      // document.label.appendChild(labelText);
      // document.div.appendChild(checkbox);
      // document.div.appendChild(label);
      // document.div.appendChild(button);
      // document.li.appendChild(div);
      // document.li.appendChild(input);
      // taskList.appendChild(li);
    }
  });
};
