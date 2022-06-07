let vizsgaltSzam=Number(prompt("Adj meg egy vizsgálandó számot"));
let oszto=0;
for(let i=1;i<=vizsgaltSzam;i++){
	if(vizsgaltSzam%i==0)
    {
    	oszto++;
    }
}
if(oszto==2)
{
	document.write(`A vizsált szám ${vizsgaltSzam} prím, mert osztóinak száma ${oszto}`);
}
else
{
	document.write(`A vizsált szám ${vizsgaltSzam} NEM prím, mert osztóinak száma ${oszto}`);
}