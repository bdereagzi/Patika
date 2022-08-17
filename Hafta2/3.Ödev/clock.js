let days =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
let Name=prompt("Adınız Nedir?");
let myName= document.querySelector("#myName");
if(Name){
    myName.innerHTML='${Name}'
}
else{
    alert.apply("Bir isim giriniz.")
    location.reload();
}
function clockFunction(){
    let dateTime=new Date();
    let day= days[dateTime.getDay()];
    let hrs =dateTime.getHours();
    let min =dateTime.getMinutes();
    let sec =dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}

setInterval(clockFunction, 1000);