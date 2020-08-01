let min=0;
let sec=0;
let milisec=0;
let timer;

function set(){
    document.getElementById('set').disabled= true;
    min=parseInt(prompt("Enter the min"));
    document.getElementById("timer").innerHTML=min + ":"+ sec +":"+milisec;
    sec=parseInt(prompt("Enter the Seconds"));
    document.getElementById("timer").innerHTML=min+":" + sec +":"+milisec;

}

function callTimer(){
    milisec++;
    if(milisec < 100){
        if(milisec === 99){
            milisec = 0;
            sec++;
            if(sec === 60){
                sec = 0;
                min++;
            }
        }
    }
    else{
        milisec = 0;
    }
    document.getElementById("timer").innerHTML=min + ":" + sec + ":" + milisec;
}

function start(){
    document.getElementById("start").disabled=true;
    timer=setInterval(callTimer,10
        );
}

function stop(){
    document.getElementById("set").disabled=false;
    document.getElementById("start").disabled=false;
    clearInterval(timer);
}

function reset(){
    stop();
    min=0;
    sec=0;
    milisec=0;
    document.getElementById("timer").innerHTML=min+":"+sec+":"+milisec;
}
