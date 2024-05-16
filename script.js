console.log("Welcome to Todo");

const input = document.getElementById("input");
const inputBtn = document.getElementById("input-btn");
const ul = document.querySelector("ul");

document.addEventListener("keydown", (e) => {
  // To focus the input with --> "i" + ctrl key
  if (e.key === "i" && e.ctrlKey) {
    input.focus();
  }

  // To remove the nth children from task
  if (e.ctrlKey && 0 <= e.key && e.key <= 9) {
    if (ul.children.length > e.key) {
      ul.children[e.key].remove();
    }
  }
});

// To insert task with Enter key
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") addTaskElement();
});

// To insert task with add btn
inputBtn.addEventListener("click", (e) => {
  addTaskElement();
});

// To create a new task and insert into DOM
const addTaskElement = () => {
  const value = input.value;

  // Validation whether the value is present in the input else alert
  if (value.trim()) {
    // li
    const li = document.createElement("li");
    li.classList.add("task");

    // span
    const span = document.createElement("span");
    span.appendChild(document.createTextNode(value));
    li.appendChild(span);

    // delBtn
    const delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);

    delBtn.addEventListener("click", (e) => {
      if (e.shiftKey) {
        li.remove();
      }
    });

    ul.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter a Task detail");
  }
};
