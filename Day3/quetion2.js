function osname(str)
{
    let strname=str.split(" ");
    return strname
}

let osver=String(prompt("Enter OS name and Version"));
let result=osname(osver)

let os=result[0];
let ver=result[1];
console.log(`OS Name:${os} & Version: ${ver}`);