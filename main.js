let x = document.querySelector("#clicks")
let count = 0
function btnPressed(){
    count += 1
    console.log(count)
    x.textContent = count
};
