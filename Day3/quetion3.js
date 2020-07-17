let marks =Number(prompt("Enter a Marks to check a Grade"));

if(marks < 35){
    console.log(`Marks are ${marks} and Grade is F`);
}
else if(marks >= 35 && marks <= 49){
    console.log(`Marks are ${marks} and Grade is C`);
}
else if(marks >= 50 && marks <=59){
    console.log(`Marks are ${marks} and Grade is B`);
}
else {
    console.log(`Marks are ${marks} and Grade is A`);
}

switch(marks){
    case (marks<35):
        console.log(`Marks are ${marks} and Grade is F`);
    break;
    case (marks >= 35):
        console.log(`Marks are ${marks} and Grade is C`);
    break;
    case (marks >= 50 && marks <= 59):
        console.log(`Marks are ${marks} and Grade is B`);
    break;
    default:
        console.log(`Marks are ${marks} and Grade is A`);
    break;
}