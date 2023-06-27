export const sayHello = (text) => {
  return text;
};

const mainContent = document.querySelector(".main");
const taskList = document.querySelector(".todo-list");
const footerContent = document.querySelector(".footer");

export const checkTaskList = () => {
  if (taskList.children.length === 0) {
    mainContent.classList.add("hidden");
    footerContent.classList.add("hidden");
  }
};
