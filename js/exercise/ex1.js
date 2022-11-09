console.log("Testing Node.")
let a = prompt("Input start: ")
let b = prompt("Input end: ")
let i
for (i = a; i <= b; i++) {
    if (Number.isInteger(Math.sqrt(i)) == true) {
        console.log("Valid square number: " + i)
    }
}
console.log("End.")