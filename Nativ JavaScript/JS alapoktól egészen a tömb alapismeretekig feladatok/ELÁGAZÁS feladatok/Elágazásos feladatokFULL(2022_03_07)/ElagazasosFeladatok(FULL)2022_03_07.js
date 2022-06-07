<script>
/*
//Egyirányú elágazás
let randomSzam=Math.round(Math.random()*5);
if(randomSzam==3)
{
	document.write("A generált számom értéke 3!");
}
*/
/*
//Kétirányú elágazás
let randomSzam=Math.round(Math.random()*5);
document.write(randomSzam+"<br>");
if(randomSzam==3)
{
	document.write("A generált számom értéke 3!");
}
else
{
	document.write("A generált számom értéke NEM 3!");
}
*/
/*
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
}*/

/*
//Páros Páratlan feladat megoldása
let szam =Math.round(Math.random()*100);
if(szam%2==0){
	document.write("A generált szám "+ szam + " páros");
}
else{
	document.write("A generált szám "+ szam + " páratlan");
}
*/
/*
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
*/

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
</script>
