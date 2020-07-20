/*create a for loop tht iterstes upto 100 while outputing 
"fizz" at multiple of 3
"buzz" at multiple of 5
"fizzbuzz" at multiple of 3 & 5 */

for(let i=1;i<=15;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("multiple of 3 and 5");
        console.log("FIZZBUZZ");
    }
    if(i%3==0 && i%5!=0)
    {
        console.log("multiple of 3 ");
        console.log("FIZZ");
    }
    if(i%5==0 && i%3!=0)
    {
        console.log("Multiple of 5");
        console.log("BUZZ");
    }
    
}
