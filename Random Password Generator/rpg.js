const inputbox = document.getElementById("password");
let length = 10;
let numbers = "0123456789";
let symbols = "!~@#$%^&*()_-+=,<>>?/`";
let smalls = "abcdefghijklmnopqrstuvwxyz";
let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allchar = numbers + symbols + caps + smalls;

function randomPassword(){
    let password = "";
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    password += caps[Math.floor(Math.random()*caps.length)];
    password += smalls[Math.floor(Math.random()*smalls.length)];

    while(length > password.length){
        password += allchar[Math.floor(Math.random()*allchar.length)];

    }
    inputbox.value = password

}

function copyPassword(){
    inputbox.select();
    document.execCommand("copy")
}


