//Szerkeszthető háromszög
let a= Math.round(Math.random()*10)+1;
let b= Math.round(Math.random()*10)+1;
let c= Math.round(Math.random()*10)+1;
if(a+b>c && b+c>a && a+c>b)
{
	document.write(`<br>A ${a},${b},${c} oldalú háromszög szerkeszthető`);
}
else
{
	document.write(`<br>A ${a},${b},${c} oldalú háromszög NEM szerkeszthető`);
}