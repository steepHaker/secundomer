// Timer field
const hourElement = document.querySelector('.hourse');
const minuteElement = document.querySelector('.minuts');
const secondElement = document.querySelector('.seconds');
const millisecondElement = document.querySelector('.millisecond');

// bottons
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop');
const recordingBtn = document.querySelector('.recording');

// Listeners 
startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
})

stopBtn.addEventListener('click', () => {
    clearFilds()
})

recordingBtn.addEventListener('click', () => {
    clearInterval(interval)
    counter++
    const result = document.querySelector('.results')
    const block = document.createElement('div')
    block.innerText = `круг ${counter}: ${hourse}:${minuts}:${seconds}:${millisecond}`
    result.append(block)
    interval = setInterval(startTimer, 10)
})


//variables
let hourse = 00,
    minuts = 00,
    seconds = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true;

function startTimer() {
    // Milliseconds
    millisecond++
    if (millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if (millisecond > 99) {
        seconds++
        secondElement.innerText = '0' + seconds
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }
    //seconds
    if (seconds < 9) {
        secondElement.innerText = '0' + seconds
    }
    if (seconds > 9) {
        secondElement.innerText = seconds
    }
    if (seconds > 59) {
        minuts++
        minuteElement.innerText = '0' + minuts
        seconds = 0
        secondElement.innerText = '0' + seconds
    }

    //minute
    if (minuts < 9) {
        minuteElement.innerText = '0' + minuts
    }
    if (minuts > 9) {
        minuteElement.innerText = minuts
    }
    if (minuts > 59) {
        hourse++
        hourElement.innerText = '0' + hourse
        minuts = 0
        minuteElement.innerText = '0' + minuts
    }
    //hour
    if (hourse < 9) {
        hourElement.innerText = '0' + hourse
    }
    if (hourse > 9) {
        hourElement.innerText = hourse
    }
}

function clearFilds() {
    clearInterval(interval)
    hourse = 00
    minuts = 00
    seconds = 00
    millisecond = 00
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondElement.textContent = '00'
}








