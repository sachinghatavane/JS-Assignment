let limit=Number(prompt("Enter a limit upto you want a prime Numbers:"));
function printPrime(l)
{
    let i=0,j=0;
    for(i=1; i<= l;i++)
    {
        let c=0;
        for(j=1;j<=i;j++)
        {
            if(i%j == 0)
            {
                c++;
            }
        }
        if(c==2)
        {
            console.log(i);
        }
    } 
}
let result=printPrime(limit);
