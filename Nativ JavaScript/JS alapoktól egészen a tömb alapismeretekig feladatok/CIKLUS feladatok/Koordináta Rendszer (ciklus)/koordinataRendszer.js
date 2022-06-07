let x= Math.round(Math.random()*4)-2;
let y= Math.round(Math.random()*4)-2;

if(x>0 && y>0)
{
	document.write(`A ${x},${y} pont, az első síknegyedben van`);
}
else if(x<0 && y>0)
{
	document.write(`A ${x},${y} pont, az második síknegyedben van`);
}
else if(x<0 && y<0)
{
	document.write(`A ${x},${y} pont, az harmadik síknegyedben van`);
}
else if(x>0 && y<0)
{
	document.write(`A ${x},${y} pont, az negyedik síknegyedben van`);
}
else if(x==0 && y==0)
{
	document.write(`A ${x},${y} pont, az origóban van`);
}
else if(x==0)//y hogy írhatjuk hogy y!=0, ha 2 feltételt szeretnénk megadni!
{
	document.write(`A ${x},${y} pont, az y tengelyen van`);
}
else
{
	document.write(`A ${x},${y} pont, az x tengelyen van`);
}
