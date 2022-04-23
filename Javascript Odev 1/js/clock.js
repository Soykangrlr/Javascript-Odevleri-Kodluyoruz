let firstName = prompt("Adınızı Giriniz")
let myName=document.querySelector("#myName")
let myClock=document.querySelector("#myClock")
function showTime(){
    let tarih=new Date();
    let hours=tarih.getHours();
    let minute=tarih.getMinutes();
    let seconds=tarih.getSeconds();
    let day=tarih.getDay();
    switch (day){
    
        case 0:{
            day="Pazar"
            break;
        }
        case 1 :{
            day="Pazartesi"
            break;
        }
        case 2 :{
                day="Salı"
                break;
            }
        case 3 :{
                day="Çarşamba"
                break;
            }
        case 4 :{
                day="Perşembe"
                break;
            }  
        case 5 :{
                day="Cuma"
                break;
            }  
        case 6 :{
                day="Cumartesi"
                break;
            }
    }
    
    myClock.innerHTML=`${hours} ${minute} ${seconds} ${day} `
}
myName.innerHTML=`${firstName}`

setInterval(showTime,1000)
