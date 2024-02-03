const btn1 = document.querySelector("#p1Btn");
const btn2 = document.querySelector("#p2Btn");
const sc1 = document.querySelector("#p1Display");
const sc2 = document.querySelector("#p2Display");
const btnReset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

btn1.addEventListener("click", () => {

    if(!isGameOver){
        p1Score += 1;
        if ((p1Score === winningScore)) {
            isGameOver = true;
            sc1.classList.add('has-text-success')
            sc2.classList.add('has-text-danger')
            btn1.disabled = true;
            btn2.disabled = true;
        }
        sc1.textContent = p1Score;
    }
  
});

btn2.addEventListener("click", () => {
    if(!isGameOver){
        p2Score += 1;
        if ((p2Score === winningScore)) {
            isGameOver = true;
            sc2.classList.add('has-text-success')
            sc1.classList.add('has-text-danger')
            btn1.disabled = true;
            btn2.disabled = true;
        }
        sc2.textContent = p2Score;
    }
});

winningScoreSelect.addEventListener('change', function(e) {
    // winningScoreSelect.value == this.value
     winningScore = parseInt(this.value) 
    reset()
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    sc1.textContent = p1Score;
    sc2.textContent = p2Score;
    isGameOver = false;
    sc1.classList.remove('has-text-success','has-text-danger')
    sc2.classList.remove('has-text-success','has-text-danger')
    btn1.disabled = false;
    btn2.disabled = false;
    
}

btnReset.addEventListener("click", reset);