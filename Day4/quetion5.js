console.log("SALES DEPARTMENT");
let ename=prompt("Enter a Employee name :");
let sales=Number(prompt("Enter a employee sales :"));

if(sales>=0 && sales<=5000)
{
    sales= sales+ (sales*0.2)/100;
    console.log(`Employee Name :${ename} and Sales :${sales}`);
}
else if(sales >= 5001 && sales <= 10000)
{
    sales=sales + (sales*0.5)/100;
    console.log(`Employee Name :${ename} and Sales :${sales}`);
}
else if(sales>=10001 && sales<=20000)
{
    sales= sales + (sales*0.7)/100;
    console.log(`Employee Name :${ename} and Sales :${sales}`);
}
else{
    sales= sales+ (sales*0.10)/100;
    console.log(`Employee Name :${ename} and Sales :${sales}`);
}

