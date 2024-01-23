//my variables

let btnAdd = document.querySelector("#addTask")

let inputFieldMain = document.querySelector(".my-task-input")

let eachTask = document.querySelector(".all-my-tasks")

let myModelDiv = document.querySelector(".each-task")


function addTask(){
  let valueInput = inputFieldMain.value

  //only if task entered, it is added
  if(valueInput.length !=0){
    let newDiv = document.createElement("div")

    newDiv.setAttribute("class","each-task")

    newDiv.setAttribute("status","in-process")
    
    newDiv.innerHTML = myModelDiv.innerHTML
    
    eachTask.appendChild(newDiv)

    let myOriginalTask = document.querySelectorAll(".my-text")
    
    //stores the new text into my last added task
    myOriginalTask[myOriginalTask.length-1].innerText = valueInput.toUpperCase()
  }
}


//ENTER activates my ADD-btn
let input = document.getElementById("enter");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    btnAdd.click()}
});

btnAdd.addEventListener("click",addTask) 

//event listener for whole section

eachTask.addEventListener("click",(e)=>{
  
  if (e.target.id == "validate") {

    e.target.parentElement.parentElement.setAttribute("status","done")

    e.target.parentElement.parentElement.style.background = "black"
    e.target.parentElement.parentElement.querySelector(".print-task-text").style.background = "black"
    e.target.parentElement.parentElement.querySelector(".print-task-text").style.color = "white"
    e.target.parentElement.parentElement.style.boxShadow= "1px 1px 0px 0px yellow, 2px 2px 0px 0px yellow, 2px 2px 0px 0px yellow, 4px 4px 0px 0px yellow, 3px 3px 0px 0px yellow"


    
  } else if(e.target.id == "modify") {
    e.target.parentElement.parentElement.style.background = "white"
    e.target.parentElement.parentElement.querySelector(".print-task-text").style.background = "white"
    e.target.parentElement.parentElement.querySelector(".print-task-text").style.color = "black"
    e.target.parentElement.parentElement.style.boxShadow= "none"

    e.target.parentElement.querySelector("#validate").classList.add("hide")
    
    let saveBtn = e.target.parentElement.querySelector("#save")

    saveBtn.classList.remove("hide")

    e.target.parentElement.parentElement.setAttribute("status","in-process")
    let myInput = e.target.parentElement.parentElement.querySelector(".modify-task-input")
    //take "hide"-class away
    myInput.setAttribute("class","modify-task-input")
    //want to retake the before entered text as value to be able to mmodify it in the field
    myInput.value = e.target.parentElement.parentElement.querySelector(".my-text").innerText

    saveBtn.addEventListener("click",()=>{
      let myInput = e.target.parentElement.parentElement.querySelector(".modify-task-input")

      if(myInput.value.length != 0){
        e.target.parentElement.parentElement.querySelector(".my-text").innerText = myInput.value.toUpperCase()
        myInput.classList.add("hide")
        e.target.parentElement.querySelector("#validate").classList.remove("hide")
    
        saveBtn.classList.add("hide")
      } 
    })

  } else if(e.target.id == "delete"){

    //hide my delete-btn
    e.target.classList.add("hide")

    let myBtnsDelete = e.target.parentElement.querySelector(".my-delete-buttons")

    //show my two confirmation btns
    myBtnsDelete.classList.remove("hide")

    myBtnsDelete.addEventListener("click",(y)=>{
      if(y.target.id == "yes"){
        
        //delete the parent-element
        e.target.parentElement.parentElement.remove()

      } else{
        //show my normal delete-btn again
        e.target.classList.remove("hide")

        //hide my two confirmation btns
        myBtnsDelete.classList.add("hide")
      }
    })
  } 
})


//FILTERING

//all my menu btns
let btnAll = document.querySelector("#all")

let btnProcess = document.querySelector("#in-process")

let btnDone = document.querySelector("#done")

//all my tasks in process
let elementsProcess = document.querySelectorAll("[status=in-process]")

//all DONE elements
let elementsDone = document.querySelectorAll("[status=done]")


//depending on the btn clicked, I add a class "hide" to the respective elements that are not to be shown


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


