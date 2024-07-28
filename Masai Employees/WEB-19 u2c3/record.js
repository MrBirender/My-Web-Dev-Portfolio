// Event listener to the submit btn:
let button = document.querySelector('form')
button.addEventListener("submit", function(){
    displayData()
})
// Global arr:
let arr = JSON.parse(localStorage.getItem("obj")) || [];
submitData(arr)
function displayData(){
    event.preventDefault();
    var name = document.getElementById("name").value
    var id = document.getElementById("employeeID").value
    var dep = document.getElementById("department").value
    var exp = document.getElementById("exp").value
    var mail = document.getElementById("email").value
    var mobile = document.getElementById("mbl").value

    var obj ={
        name: name,
        id: id,
        dep: dep,
        exp: exp,
        mail: mail,
        mobile: mobile
    }

    arr.push(obj);
    localStorage.setItem("obj", JSON.stringify(arr))
    var saved = JSON.parse(localStorage.getItem("obj"))
    // console.dir(document)
    
    submitData(arr)

}

function submitData(arr){
    document.querySelector("tbody").innerHTML = ""
    arr.forEach(function(value, index){
        var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = value.name
    var td2 = document.createElement("td")
    td2.textContent = value.id
    var td3 = document.createElement("td")
    td3.textContent = value.dep
    var td4 = document.createElement("td")
    td4.textContent = value.exp
    var td5 = document.createElement("td")
    td5.textContent = value.mail
    var td6 = document.createElement("td")
    td6.textContent = value.mobile
    var td7 = document.createElement("td")
    if(value.exp <= 1){
        td7.textContent = "Fresher"
    }
    else if(value.exp >= 2 && value.exp <= 5){
        td7.textContent = "Junior"
    }
    else if(value.exp > 5){
        td7.textContent = "Senior"
    }
    var button = document.createElement("button")
    button.textContent = "Delete"
    button.addEventListener("click", function(){
        deleteEntry(index)
    })

    tr.append(td1, td2, td3, td4, td5, td6, td7, button)
    document.querySelector("tbody").append(tr)
    })
    
}

function deleteEntry(index){
    arr.splice(index, 1)
    localStorage.setItem("obj", JSON.stringify(arr))
    submitData(arr)
    
}

