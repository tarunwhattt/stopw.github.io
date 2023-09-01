

function currentTime(){
    let date = new Date();
    
    let day = date.getDay();
    let month= date.getMonth();
    let dat = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    
   
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const monthsOfYear = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

    if(hh == 0){
        hh = 12;
    }   
    if(hh > 12){
        hh = hh - 12;
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
    


    time =hh +"\n"+mm; 
    din = daysOfWeek[day]+" "+monthsOfYear[month]+ " "+dat;
    
    document.getElementById("day").innerText=din;
    document.getElementById("time").innerText=time;
   
    setTimeout(currentTime, 1000);

}

currentTime();


let ss = 0;
let ms = 0;
let isRunning = false ; 
let intervalId;


startStopBtn.addEventListener('click',function(){

    if (isRunning){
        clearInterval(intervalId);
        document.getElementById("startStopBtn").innerHTML="start";
        isRunning= false;

     
    }
    else{
        intervalId= setInterval(stopWatch,10);
        document.getElementById("startStopBtn").innerHTML="pause";
        setTimeout (() =>{
        resetBtn.classList.add("clicked")
        flagBtn.classList.add("clicked")
        startStopBtn.classList.add("clicked")
        timer.classList.add("clicked")
        time.classList.add("clicked")
        day.classList.add("clicked")},1);
        document.getElementById("resetBtn").style.display = "inline";
        document.getElementById("flagBtn").style.display = "inline";
        

        isRunning = true;

    }

});

resetBtn.addEventListener('click', function() {
    clearInterval(intervalId)   
    document.getElementById("startStopBtn").innerHTML="start";
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("flagBtn").style.display = "none";
    timer.classList.remove("clicked")
    startStopBtn.classList.remove("clicked")
    resetBtn.classList.remove("clicked")
    flagBtn.classList.remove("clicked")
    ms = 0;
    ss = 0;
    
    document.getElementById("timer").innerHTML="00:00";

    isRunning= false;
    


});

let lapTimes = [];

flagBtn.addEventListener('click',()=>{
    
    if (isRunning) {
        lapTimes.push(document.getElementById("timer").innerText);
        displayLapTimes();
    }
})

function displayLapTimes() {
    const lapList = document.getElementById("lapList");
    lapList.innerHTML = ''; 
    lapTimes.forEach((lapTime, index) => {
        const lapItem = document.createElement("li");

        lapItem.textContent = `# ${index + 1}: ${lapTime}`;
        lapList.appendChild(lapItem);
    });
}



function stopWatch(){
    ms++;
    if (ms==100){
        ms=0;
        ss++;

}
    const stopw = ss.toString().padStart(2, '0') + ":" + ms.toString().padStart(2, '0'); 
   
    document.getElementById("timer").innerText=stopw;
}



