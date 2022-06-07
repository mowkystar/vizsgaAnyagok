//számtani sorozat generálás
//Meg kell adni, egy sorozat hosszt(elemszám)
//Egy kezdőértéket
//és egy különbséget, és ki kell generálni vele egy sorozatot...
//pl.: 2,4,6,8, ------5,10,15,20,25 --------20,40,60,80 stb...
document.write("<br>Generált számtani sorozat:");
/*
let hossz=Number(prompt("Add meg a sorozat hosszát:"));
let kezdoErtek=Number(prompt("Add meg a sorozat kezdőértékét:"));
let kulonbseg=Number(prompt("Add meg a sorozat elemei közti különbséget:"));*/
let hossz=10;
let kezdoErtek=2;
let kulonbseg=3;
for(let i=0;i<hossz;i++)
{
	document.write(kezdoErtek+",");
    kezdoErtek+=kulonbseg;
}