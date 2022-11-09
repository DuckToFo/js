console.log("Testing Node.")
function findSquareNums() {
    const a = document.getElementById("start").value
    const b = document.getElementById("end").value
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if (Number.isInteger(Math.sqrt(i)) == true) {
                console.log("Valid square number: " + i)
                let node = document.createElement("li")
                let text = document.createTextNode("Valid square numbers: " + i)
                node.appendChild(text)
                document.getElementById("list").appendChild(node)
            }
        }
    } else {
        for (let i = a; i >= b; i--) {
            if (Number.isInteger(Math.sqrt(i)) == true) {
                console.log("Valid square number: " + i)
                let node = document.createElement("li")
                let text = document.createTextNode("Valid square numbers: " + i)
                node.appendChild(text)
                document.getElementById("list").appendChild(node)
            }
        }
    }
}
console.log("End.")