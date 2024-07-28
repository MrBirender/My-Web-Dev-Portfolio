let paginationDiv = document.getElementById("pagination");
let todoUl = document.getElementById("todoList");

let perPageLimit = 10;
let currentPage = 1;


// fetch request()

async function fetchData(){
    let start = (currentPage-1) * perPageLimit
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${perPageLimit}`)

    let data = await res.json()
    displayData(data)
    pagination()
    console.log(data)
}



fetchData()

function displayData(arr){
    todoUl.innerHTML = '';

    arr.forEach(ele => {
        let list = document.createElement("li");
        list.innerHTML = ele.title

        todoUl.appendChild(list)
    });
}




function pagination(){
    paginationDiv.innerHTML = '';
    totalButtons = Math.ceil(200/perPageLimit);

    for(let i=1; i<=totalButtons; i++){
        const button = document.createElement('button');
        button.innerHTML = i;
        button.addEventListener("click", ()=> {
            currentPage = i;
            fetchData()
        })
        paginationDiv.appendChild(button)

    }
}

