let form = document.getElementsByTagName("form")[0];
let table = document.querySelector(".table");
let btn = document.querySelector(".btn");
let cardNum = document.querySelector(".cardNum");
let cardNumber = document.querySelector(".cardNumber");
let cardholder = document.querySelector(".cardholderInfo");
let cardholderName = document.querySelector(".cardholderName");
let date = document.querySelector(".date");
let expDate = document.querySelector(".expDate");
let bankName = document.querySelector(".bankName");
let logo = document.querySelector(".logo");
let payingSystem = document.querySelector(".payingSystem");
let paySys = document.querySelector(".paySys");
let card = document.querySelector('.card');

cardNumber.innerText = "0000 0000 0000 0000";
cardholder.innerText = "JOHN SMITH";
cardNum.addEventListener("input", e => {
    cardNumber.textContent = e.target.value;
    if(e.target.value > 16){
        cardNumber.textContent = e.target.value.slice(0, 16);
    }
    
})
date.addEventListener("input", e =>{
    let dateNum = "";
    let array = [];
    dateNum = e.target.value;
    for(let i = 0; i< dateNum.length; i++){
        array[i] = dateNum[i];
    }
    dateNum = array[5] + array[6] + "/" + array[2] + array[3];
    expDate.textContent = dateNum;
})

cardholderName.addEventListener("input", e => {
    cardholder.textContent = e.target.value.toUpperCase();
})

bankName.addEventListener("input", e => {
    let bgc;
    let pic;
    let bankData = e.target.value;
    console.log(bgc);
    switch(bankData){
        case "Сбербанк":
            bgc = "green";
            pic = "https://companieslogo.com/img/orig/SBER.ME-10de1f5f.png";
            break; 
        case "Тинькофф":
            bgc = "gray";
            pic = "https://acdn.tinkoff.ru/static/documents/ae939645-bcda-4636-b349-6e446aa41aa1.svg";
            break; 
        case "Альфа банк":
            bgc = "red";
            pic = "https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg";
            break;
        case "ВТБ":
            bgc = "lightskyblue";
            pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/VTB_Logo_2018.svg/2560px-VTB_Logo_2018.svg.png";
            break;
        case "Почта банк":
            bgc = "darkblue";
            pic = "https://vsememy.ru/kartinki/wp-content/uploads/2023/03/1636164482_19-papik-pro-p-sovkombank-logotip-foto-19.png";
            break;
    }
    card.style.backgroundColor = `${bgc}`;
    logo.style.backgroundImage = `url(${pic})`;
    bankName.setAttribute("data", bankData);
})

paySys.addEventListener("input", e => {
    let pic;
    let bankData = e.target.value;
    console.log(bankData);
    switch(bankData){
        case "VISA":
            pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png";
            break;  
        case "MASTER CARD":
            pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1199px-Mastercard_2019_logo.svg.png";
            break;
        case "MIR":
            pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mir-logo.svg/1280px-Mir-logo.svg.png";
            break;
        case "MAESTRO":
            pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/1280px-Maestro_logo.svg.png";
            break;
        case "UNION PAY":
            pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1280px-UnionPay_logo.svg.png";
            break;
    }
    payingSystem.style.backgroundImage = `url(${pic})`;
    paySys.setAttribute("data", bankData);
})

form.addEventListener("submit", e =>{
    e.preventDefault();
    let html = "<tr>";
    html += `<td>${cardNumber.textContent || ""}</td>`;
    html += `<td>${cardholder.textContent || ""}</td>`;
    html += `<td>${expDate.textContent || ""}</td>`;
    html += `<td>${paySys.getAttribute("data") || ""}</td>`;
    html += `<td>${bankName.getAttribute("data") || ""}</td>`;
    html += "</tr>";
    table.innerHTML += html;
    e.target.reset();
    logo.style.backgroundImage = "";
    cardNumber.innerText = "0000 0000 0000 0000";
    expDate.innerText = "06/23";
    cardholder.innerText = "JOHN SMITH";
    payingSystem.style.backgroundImage = "";
    card.style.backgroundColor = "#ebc392";
})