//my variables

let btnAdd = document.querySelector("#add")

let inputFieldMain = document.querySelector(".my-task-input")

let eachTask = document.querySelector(".all-my-tasks")

let myModelDiv = document.querySelector(".each-task")


function addTask(){
  let newDiv = document.createElement("div")

  newDiv.setAttribute("class","each-task")
  
  newDiv.innerHTML = myModelDiv.innerHTML
  
  eachTask.appendChild(newDiv)

  let myOriginalTask = document.querySelectorAll(".my-text")
  
  let valueInput = inputFieldMain.value
  
  //stores the new text into my last added task
  myOriginalTask[myOriginalTask.length-1].innerText = valueInput
}


//event for my ADD-btn

btnAdd.addEventListener("click",addTask)

//event listener for whole section



eachTask.addEventListener("click",(e)=>{
  console.log(e.target)
  if (e.target.id == "validate") {
    console.log(e.target.id)
    let myInput = e.target.parentElement.parentElement.querySelector(".modify-task-input")
    console.log(myInput.value)
    e.target.parentElement.parentElement.querySelector(".my-text").innerText = myInput.value
    myInput.classList.add("hide")

    e.target.parentElement.parentElement.setAttribute("status","validated")
    e.target.parentElement.parentElement.style.background = "blue"

  } else if(e.target.id == "modify") {
    e.target.parentElement.parentElement.setAttribute("status","in process")
    let myInput = e.target.parentElement.parentElement.querySelector(".modify-task-input")
    myInput.setAttribute("class","modify-task-input")
    myInput.value = e.target.parentElement.parentElement.querySelector(".my-text").innerText
  } else if(e.target.id == "delete"){
    console.log(e.target.id)
    e.target.parentElement.parentElement.remove()
  } 
})



