const clock = document.querySelector("#clock");
const today = document.querySelector("#today");
function getClock(){

    // const christmasDate = new Date('2022-12-25T00:00:00')
    


    var date = new Date();
    
    // var difference = christmasDate - today;
    // //days = difference/(1000 * 3600 * 24)
    // //var date= new Date(difference);
    // days = difference/(1000 * 3600 * 24)
    // const fDays = Math.floor(days);
    // var times =(days - fDays) * 24 ;
    // const fTimes  =String(Math.floor(times)).padStart(2,"0");;
    // var minutes = (times - fTimes) * 60
    // const fMins  =String(Math.floor(minutes)).padStart(2,"0");
    // var fseconds =String(Math.floor((minutes-fMins)*60)).padStart(2,"0");
    // clock.innerText=`${fDays}d ${fTimes}h ${fMins}m ${fseconds}s`;

    //clock.innerText=`${diff}`;
    
    const hours =String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    clock.style.color = `rgb(${r}, ${g}, ${b})`;

    const currentMoment = moment().subtract(0, 'days');
    today.innerText=currentMoment.format('YYYY년MM월DD일');
}
getClock();
setInterval(getClock, 1000);
//setimeout(sayHello, 1000);