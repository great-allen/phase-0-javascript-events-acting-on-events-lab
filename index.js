// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace ("px", "");
    const left = parseInt(leftNumber, 10);
    if (left >0){
        dodger.style.left = `${left - 1}px`;
    }
}


document.addEventListener('keydown', function(e){
    if (e.key === 'Arrowleft'){
        moveDodgerLeft();
    }
})

function moveDodgerRight (){
    const leftNumber = dodger.style.left.replace ("px", "");
    const left = parseInt(leftNumber, 10);
    if (left < 180) {
        dodger.style.left =`${left +1}px`;
    }
}
document.addEventListener('keydown', function(e){
    if (e.key === 'Arrowleft'){
        moveDodgerRight();
    }
})