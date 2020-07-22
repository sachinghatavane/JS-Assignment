let name=prompt("Enter a Name:");

document.write('<h3>Welcome  '+name+ '  to Lets Upgrade Day6 Assignment Webpage</h3>');


function clock()
{
    let ctime=document.getElementById('time');
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText= time;
}

setInterval(clock,1000);

const dmode = document.getElementById('dark');

function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}



