const userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];

const result = document.getElementById('result');

function calculateAge(){
    let birthDate = new  Date(userInput.value)
    console.log(birthDate)

    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear()

    console.log(d1, m1, y1)

    let currentDate = new Date()
    console.log(currentDate)

    
    let d2 = currentDate.getDate()
    let m2 = currentDate.getMonth() + 1;
    let y2 = currentDate.getFullYear()

    
    console.log(d2, m2, y2)

    let m3, d3, y3;

    y3 = y2 - y1;

    if(m2 > m1){
        m3 = m2 - m1
    }
    else{
        y3--;
        m3 = m2+12 - m1;
    }

    if(d2 > d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonths(y1, m1) + d2 - d1
    }

    if(m3 < 0){
        m3 = 11;
        y3--
    }
    console.log(y3, m3, d3)
        result.innerHTML = `You are <span>${y3}</span> years , <span>${m3}</span>  months and <span>${d3}</span>  days new.`
}

function getDaysInMonths(year, month){
    return new Date(year, month, 0).getDate()
}
