/*function ask(quetion ,yes,no)
{
    if(confirm(quetion)) yes()
    else no();
}
ask(
    "Do you agree?",
    function(){
        alert("You agreed.");
    },
    function(){alert("you canceled the execution.");
    }
);*/

let ask=(yes,no) =>{
    if(confirm('do you agreed'))
    alert("you agreed");
    else
    alert("you cancelled the execution");
}


ask();