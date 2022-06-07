<script>
for(let i=0;i<10;i++)
{
	document.write("Szeretem a programozást!<br>");
}
//i++ ==> i=i+1;
//i+=2 ==> i=i+2;
/*
for(let i=0;i<100;i++)
{
	document.write("Soha többet nem leszek rossza az órán...<br>");
}
*/
for(let i=0;i<10;i=i+1)
{
	document.write(i+"<br>");
}


document.write("<hr>");
let j=0;
while(j<10)
{
	document.write(j+"<br>");
    //végtelen ciklus alakulhat ki!
    j++;
}


document.write("<hr>");
let k=0;
do
{
	document.write(k+"<br>");
    //végtelen ciklus alakulhat ki!
    k++;
}while(k<10);
</script>
