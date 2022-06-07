//Pozitív negatív nulla
let szam =Math.round(Math.random()*10)-5; //-5 től 5-ig
if(szam>0)
{
	document.write("A "+szam+" pozitív");
}
else if(szam<0)
{
	document.write("A "+szam+" negatív");
}
else
{
	document.write("A "+szam+" nulla");
}