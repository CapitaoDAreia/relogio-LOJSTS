/*
    VARIABLES
*/
const clockElement = document.querySelector('#clock');
const timerElement = document.querySelector('#timer');
const displayHourClock = document.querySelector('#display-hour');
const displayTimerClock = document.querySelector('#display-timer');
const timerButtons = document.querySelector('.timer-buttons');
run = document.querySelector('#run');
pause = document.querySelector('#pause');
myStop = document.querySelector('#stop');
let increaseHour=1;
let contador;
let piscador = 1;
/*
    FUNCTIONS
*/
function clock() {
    displayTimerClock.classList.add('close-function')
    timerButtons.classList.add('timer-buttons')
    displayHourClock.classList.remove('close-function')

    function bringMeTime() {
        let date = new Date();
        return date.toLocaleTimeString('pt-br', {
            hour12: false,
        })
    }

    setInterval(function () {
        displayHourClock.innerHTML = bringMeTime();
    }, 1000)
}

function timer(){
    const displayHourTimer = document.querySelector('#display-hour');
    
    function bringMeTimeTimer(increaseHour){
        let dateTimer = new Date(increaseHour*1000);
        return dateTimer.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    clearInterval(contador)
    contador = setInterval(function(){
        displayTimerClock.innerHTML = bringMeTimeTimer(increaseHour);
        increaseHour++;
    }, 1000)
};

/*
    BUTTONS
*/
clockElement.addEventListener('click', function(){
    clock()
});

timerElement.addEventListener('click', function(){
    displayHourClock.classList.add('close-function')
    displayTimerClock.classList.remove('close-function')
    timerButtons.classList.remove('timer-buttons')
    clearInterval(contador)
});


/*
    Timer Buttons
*/
run.addEventListener('click', function(){
    displayTimerClock.style.opacity = "1";
    clearInterval(piscador)
    timer()
})

pause.addEventListener('click', function(){
    clearInterval(contador)
    piscador = setInterval(function(){
        if(displayTimerClock.style.opacity == 0){
            displayTimerClock.style.opacity = "1"
        }else{
            displayTimerClock.style.opacity = "0"
        }
    }, 1000)
})

myStop.addEventListener('click', function(){
    clearInterval(piscador);
    clearInterval(contador);
    increaseHour = 1;
    displayTimerClock.style.opacity = "1";
    displayTimerClock.innerHTML = "00:00:00"
})