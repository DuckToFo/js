const setBg = () => {
    setInterval(() => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor; 
    }, 100);
}
disco.addEventListener("click", setBg);
function setWhite(){
    document.body.style.backgroundColor = "#ffffff";
}