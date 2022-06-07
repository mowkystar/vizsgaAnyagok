//Másodfokú egyenlet megoldóképlete
document.write("<hr>");
let a=Number(prompt("Add meg az [a] értékét:"));
let b=Number(prompt("Add meg az [b] értékét:"));
let c=Number(prompt("Add meg az [c] értékét:"));

if(a==0)
{
	document.write("Az egyenlet nem másodfokú");
}
else
{
	let d=(b*b)-(4*a*c);
	if(d<0)
    {
    	document.write("Az diszkrimináns negatív az egyenletnek nincs megoldása");	
    }
    else if(d==0)
    {
    	document.write("Az egyenletnek egy megoldása van:");
        let x1=-b/(2*a);
        document.write("<br>x1="+x1);
    }
    else
    {
    	document.write("Az egyenletnek két megoldása van:");
        let x1=(-b+Math.sqrt(d))/(2*a);
        let x2=(-b-Math.sqrt(d))/(2*a);
        document.write("<br>x1="+x1);
        document.write("<br>x2="+x2);
    }
}