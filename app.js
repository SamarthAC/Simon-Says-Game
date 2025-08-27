let strt=document.querySelector('body');
let h3=document.querySelector('h3');
let strbtn=document.querySelector('button');
userSeq=[];
gameSeq=[];
started=false;
level=0;
strbtn.innerText='Start';

let btns=['red','yellow','green','blue'];
strbtn.addEventListener('click',startgame);
strt.addEventListener('keypress',startgame);

function startgame(){
    if(started==false){
        console.log('Game Started!');
        started=true;
        levelUp();
        strbtn.style.visibility='hidden';
    }
}


let allBtns=document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function btnPress(){
    let idbtn=this;
    userColor=idbtn.getAttribute('id');
    userFlash(idbtn);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerHTML=`Level : ${level}`;

    let rndIdx=Math.floor(Math.random()*4);
    let rndColor=btns[rndIdx];
    let rndBtn=document.querySelector(`.${rndColor}`);
    
    gameFlash(rndBtn);
    gameSeq.push(rndColor);
    console.log(gameSeq);
}

function gameFlash(btn){
    btn.classList.add('gameFlash');
    setTimeout(()=>{
        btn.classList.remove('gameFlash');
    },250);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(()=>{
        btn.classList.remove('userFlash');
    },250)
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
             setTimeout(levelUp,1000);

        }
    }else{
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },200);
        console.log("Game Over!");


        h3.innerHTML=`Game Over <br> Your Score was : ${level} <br> Press any key to Restart!`;
        reset();

    }
}


function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
    strbtn.style.visibility='visible';
    strbtn.innerText='Start Again!';
}


