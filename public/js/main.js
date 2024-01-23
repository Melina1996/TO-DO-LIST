//my variables

let btnAdd = document.querySelector("#addTask")

let inputFieldMain = document.querySelector(".my-task-input")

let eachTask = document.querySelector(".all-my-tasks")

let myModelDiv = document.querySelector(".each-task")


function addTask(){
  let newDiv = document.createElement("div")

  newDiv.setAttribute("class","each-task")

  newDiv.setAttribute("status","in-process")
  
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
  
  if (e.target.id == "validate") {

    let myInput = e.target.parentElement.parentElement.querySelector(".modify-task-input")

    if(myInput.value.length != 0){
      e.target.parentElement.parentElement.querySelector(".my-text").innerText = myInput.value
      myInput.classList.add("hide")
    } 

    e.target.parentElement.parentElement.setAttribute("status","done")

    e.target.parentElement.parentElement.style.background = "blue"
    
  } else if(e.target.id == "modify") {
    e.target.parentElement.parentElement.style.background = "white"

    e.target.parentElement.parentElement.setAttribute("status","in-process")
    let myInput = e.target.parentElement.parentElement.querySelector(".modify-task-input")
    //take "hide"-class away
    myInput.setAttribute("class","modify-task-input")
    //want to retake the before entered text as value to be able to mmodify it in the field
    myInput.value = e.target.parentElement.parentElement.querySelector(".my-text").innerText
    console.log(myInput)
    console.log(myInput.value)
  } else if(e.target.id == "delete"){
    console.log(e.target.id)
    e.target.parentElement.parentElement.remove()
  } 
})

//event listener for filtering

let btnAll = document.querySelector("#all")


let btnProcess = document.querySelector("#in-process")

let btnDone = document.querySelector("#done")

//all my tasks in process
let elementsProcess = document.querySelectorAll("[status=in-process]")

//all DONE elements
let elementsDone = document.querySelectorAll("[status=done]")


btnProcess.addEventListener("click",()=>{
  //status of all my tasks 
  elementsDone = document.querySelectorAll("[status=done]")
  elementsProcess = document.querySelectorAll("[status=in-process]")
  elementsDone.forEach(element => {
    element.classList.add("hide")
  });
  elementsProcess.forEach(element => {
    element.classList.remove("hide")
  });
})

btnDone.addEventListener("click",()=>{
  //status of all my tasks
elementsDone = document.querySelectorAll("[status=done]")
elementsProcess = document.querySelectorAll("[status=in-process]")
  elementsProcess.forEach(element => {
    element.classList.add("hide")
  });
  elementsDone.forEach(element => {
    element.classList.remove("hide")
  });
})

btnAll.addEventListener("click",()=>{
  //status of all my tasks 
  elementsDone = document.querySelectorAll("[status=done]")
  elementsProcess = document.querySelectorAll("[status=in-process]")
  elementsDone.forEach(element => {
    element.classList.remove("hide")
  });
  elementsProcess.forEach(element => {
    element.classList.remove("hide")
  });
})


