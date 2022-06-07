//Többirányú elágazás
let randomSzam=Math.round(Math.random()*10);
document.write(randomSzam+"<br>");
if(randomSzam==0)
{
	document.write("A generált számom értéke 0!");
}
else if(randomSzam==1)
{
	document.write("A generált számom értéke 1!");
}
else if(randomSzam==2)
{
	document.write("A generált számom értéke 2!");
}
else if(randomSzam==3)
{
	document.write("A generált számom értéke 3!");
}
else if(randomSzam==4)
{
	document.write("A generált számom értéke 4!");
}
else if(randomSzam==5)
{
	document.write("A generált számom értéke 5!");
}
else
{
	document.write("A generált számom értéke nem 0-5-ig terjed!");
}