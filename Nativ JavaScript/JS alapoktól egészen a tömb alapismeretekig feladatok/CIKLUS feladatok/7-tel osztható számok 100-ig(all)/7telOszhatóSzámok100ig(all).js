//7-tel osztható számok 0-től 100-ig
//for ciklussal
document.write("<br>");
for(let i=0;i<100;i++)
{
	if(i%7==0)
    {
    	document.write(i+",");
    }
}
//while ciklussal
document.write("<br>");
let a=0;
while(a<100)
{
	document.write(a+",");
    a+=7;
}

//do-while ciklussal
document.write("<br>");
let b=0;
do
{
	document.write(b+",");
    b+=7;
}while(b<100);
