const task = document.getElementById("task");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const dA = document.getElementById("dA");

//Enter button
task.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});
//Delet button

dA.addEventListener("click", function () {
  list.innerHTML = "";
  // if(list.innerHTML===""){
  //   alert("All tasks have been deleted");
  // }
  
});






//Empty input code
btn.addEventListener("click", function () {
  if (task.value === "") {
    alert("pleace enter a task");
    return;
  }
  //show items
  const li = document.createElement("li");
  li.textContent = task.value;

  //edit button
  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.style.backgroundColor = "green";

  editbtn.addEventListener("click", function () {
    const newTask =prompt("Edit your task:", li.firstChild.textContent);
    if (newTask !== null && newTask !== "") {
      li.firstChild.textContent = newTask;
    }
  });
  //Delet button
  const deltebtn = document.createElement("button");
  deltebtn.textContent = "Delete";

  deltebtn.addEventListener("click", function () {
    li.remove();
  });

  // call the code
  li.appendChild(editbtn);
  li.appendChild(deltebtn);
  list.appendChild(li);
  task.value = "";
});
