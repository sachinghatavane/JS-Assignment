//Write a program that will iterate over an array of colors and change the background of the page after 5 seconds.



console.log("Hey guys today TCS send a mail in that TCS enroled to Java Program. \n TCS gave varius courses to us. \n I am very excited to join the TCS. ")

var i=0;
const dmode=document.getElementById('color');
function dark(){
    let color=['red','purple','green','blue','black'];    
        
        document.body.style.backgroundColor=color[i];
        document.body.style.color='white';
        i=(i+1)%color.length;     
        
}

setInterval(dark,1000);


