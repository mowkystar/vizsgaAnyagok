//Pozitív negatív
let szam =Math.round(Math.random()*10)-5; //-5 től 5-ig
//0 vagy annál nagyobb az pozitív
//különben negatív
if(szam>=0)
{
	document.write("A "+szam+" pozitív");
}
else
{
	document.write("A "+szam+" negatív");
}