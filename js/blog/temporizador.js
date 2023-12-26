const inputChange = document.querySelector(".timer__input");
const timeNumber = document.querySelector(".timer__number");

const buttonStart = document.querySelector(".timer__start");
const buttonPause = document.querySelector(".timer__pause");
const buttonStop = document.querySelector(".timer__stop");
let idInterval,idStopTimer;

inputChange.addEventListener("input", function(event) {
    timeNumber.textContent=event.target.value
});
buttonStart.addEventListener("click", function(event) {
    inputChange.disabled=true,buttonStart.disabled=true
    buttonPause.disabled=false,buttonStop.disabled=false
    const [intervalId, stopTimerId] =timer(Number(inputChange.value))
    idInterval = intervalId;
    idStopTimer = stopTimerId;
});
buttonPause.addEventListener("click", function(event) {
    if(buttonPause.textContent.trim() === "Pausar"){
        console.log("pausar")
        buttonPause.textContent="Continuar"
        clearInterval(idInterval)
        clearTimeout(idStopTimer)
    }
    else if(buttonPause.textContent.trim() === "Continuar"){
        buttonPause.textContent="Pausar"
        const [intervalId, stopTimerId] =timer(Number(timeNumber.textContent))
        idInterval = intervalId;
        idStopTimer = stopTimerId;
    }
});
buttonStop.addEventListener("click", function(event) {
    clearInterval(idInterval)
    clearTimeout(idStopTimer)
    clearTimer()
});
function timer(time){
    let idInterval= setInterval(function (){
        timeNumber.textContent--
    },1000)
    let idStopTimer= setTimeout(function(){
        clearInterval(idInterval)
        clearTimer()
    },(time*1000)+1000)
    //transform second to milisecond ,+1 second to give 0
    return[idInterval,idStopTimer] 
}
function clearTimer(){
    inputChange.disabled=false,buttonStart.disabled=false
    buttonPause.disabled=true,buttonStop.disabled=true
    timeNumber.textContent="--"
    inputChange.value=""
}


