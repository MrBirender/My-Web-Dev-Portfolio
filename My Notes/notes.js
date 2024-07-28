const createbtn = document.getElementById("createBtn");
const textBox = document.querySelector(".notesContent");
let notes = document.querySelectorAll(".text");

function showNotes(){
    textBox.innerHTML = localStorage.getItem("notes")
}

showNotes()

function updateStorage(){
    localStorage.setItem("notes", textBox.innerHTML)
}



createbtn.addEventListener("click", ()=>{
    createBox()
})

function createBox(){
    let inputBox = document.createElement('p');
    let img = document.createElement("img");
    inputBox.className = "text"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "notes-app-img/images/delete.png";
    textBox.appendChild(inputBox).appendChild(img)

}

textBox.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        let note = document.querySelectorAll(".text");
        note.forEach((nt) => {
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})
