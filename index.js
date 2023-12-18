let countVal = document.getElementById("counter")

let saveVal = document.getElementById("save-entry")

let count = 0 


function increment() {
    count += 1

    countVal.textContent = count
}

function save() {
    saveVal.textContent += count + " - "
    count = 0
    countVal.textContent = 0
     
}

function reset() {
    countVal.textContent = 0
}