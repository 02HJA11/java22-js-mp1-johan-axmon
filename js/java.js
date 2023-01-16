
const divMain = document.createElement("div");
divMain.classList.add('main');
document.body.appendChild(divMain);

const main = document.querySelector('.main');
// main.style.border = "2px solid black";
main.style.height = "1000px";
for(let i = 0; i < 5; i++) {
    const main = document.querySelector('.main')
    const divNew = document.createElement("div");
    divNew.classList.add('first');
    main.appendChild(divNew);
}

for(let i = 0; i < 5; i++){
    const div = document.querySelectorAll('.first');
    const para = document.createElement("p");
    para.innerText = "Rad" + (i+1);
    div[i].appendChild(para);
    // div[i].style.border = "2px solid black";
    para.style.textAlign = "center";
    para.style.color = "#6868f6";
    para.style.fontWeight = "bold";
    para.style.marginTop = "5px";

    switch(i){
        case 0:
            div[i].style.backgroundColor = "#b6fbb6";
            para.style.fontSize = "10px";
            break;
        case 1: 
            div[i].style.backgroundColor = "#b6fbcd";
            para.style.fontSize = "20px";
            break;
        case 2:
            div[i].style.backgroundColor = "#b6fbe4";
            para.style.fontSize = "30px";
            break;
        case 3: 
            div[i].style.backgroundColor = "#b6fbfb";
            para.style.fontSize = "40px";
            break;
        case 4: 
            div[i].style.backgroundColor = "#b6e4fb";
            para.style.fontSize = "50px";
            break;
        }
}
const divAll = document.querySelectorAll('.first');
divAll[0].style.height = "20px";
divAll[1].style.height = "40px";
divAll[2].style.height = "60px";
divAll[3].style.height = "80px";
divAll[4].style.height = "100px";

const divNew = document.createElement('div');
divNew.classList.add('second');

main.appendChild(divNew);
const second = document.querySelector('.second');
second.style.border = "2px solid black";
second.style.marginTop = "20px";
second.style.height = "300px";

// second.style.flex = "auto";
// second.style.flexDirection = "row";



for(let i = 1; i < 4; i++) {
    const parent = document.querySelector('.second');
    const div = document.createElement('div');
    div.classList.add("numbers");
    div.classList.add('row'+i);
    parent.append(div);
    div.style.border = "10px solid #a8a8f0";
    div.style.height = "175px";
    div.style.width = "50px";
    const j = 250;
    div.style.marginLeft = (j*i) + "px";
    div.style.marginTop = "40px";
}

// second.style.flexDirection = "column";
// second.style.flexFlow = "row wrap";

for(let i=0; i < 10; i++){
    const div = document.querySelector('.row1');
    const para = document.createElement('p');
    para.innerText = i;
    div.appendChild(para);
    para.style.textAlign = "center";
    
    para.style.margin = "0px";
    switch(i){
        case 0:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 1:
            para.style.backgroundColor = "white";
            break;
        case 2:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 3:
            para.style.backgroundColor = "white";
            break;
        case 4:
            para.style.backgroundColor = "#a8a8f0";
            break;
        case 5:
            para.style.backgroundColor = "white";
            break;
        case 6:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 7:
            para.style.backgroundColor = "white";
            break;
        case 8:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 9:
            para.style.backgroundColor = "white";
            break;
    }
}

for(let i=9; i != -1; i--){
    const div = document.querySelector('.row2');
    const para = document.createElement('p');
    para.innerText = i;
    div.appendChild(para);
    para.style.textAlign = "center";
    
    para.style.margin = "0px";
    switch(i){
        case 0:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 1:
            para.style.backgroundColor = "white";
            break;
        case 2:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 3:
            para.style.backgroundColor = "white";
            break;
        case 4:
            para.style.backgroundColor = "#a8a8f0";
            break;
        case 5:
            para.style.backgroundColor = "white";
            break;
        case 6:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 7:
            para.style.backgroundColor = "white";
            break;
        case 8:
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 9:
            para.style.backgroundColor = "white";
            break;
    }
}

for(let i=0; i < 10; i++){
    const div = document.querySelector('.row3');
    const para = document.createElement('p');
    para.style.margin = "0px";
    switch(i){
        case 0:
            para.innerText = "ett";
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 1:
                para.innerText = "två";
                para.style.backgroundColor = "white";
                break;
       case 2:
            para.innerText = "tre";
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 3:
            para.innerText = "fyra";
            para.style.backgroundColor = "white";
            break;
        case 4:
            para.innerText = "fem";
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 5:
                para.innerText = "sex";
                para.style.backgroundColor = "#a8a8f0";
                break;
        case 6:
            para.innerText = "sju";
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 7:
            para.innerText = "åtta";
            para.style.backgroundColor = "white";
            break;
        case 8:
            para.innerText = "nio";
            para.style.backgroundColor = "black";
            para.style.color = "white";
            break;
        case 9:
            para.innerText = "tio";
            para.style.backgroundColor = "white";
            break;
        }

    
    div.appendChild(para);
    para.style.textAlign = "center";
}

const numbers = document.querySelectorAll('.numbers');
numbers[1].style.marginTop = "-195px";
numbers[2].style.marginTop = "-195px";









// const btn = document.createElement("button");
// btn.innerHTML = "Hello Button";
// document.body.appendChild(btn);