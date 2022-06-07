//Páros páratlan eljárás.
function ParosParatlan(vizsgalandoSzam)
{
	if(vizsgalandoSzam%2==0)
    {
    	document.write(`<br>A vizsált szám ${vizsgalandoSzam}, PÁROS.`);
    }
    else
    {
    	document.write(`<br>A vizsált szám ${vizsgalandoSzam}, PÁRATLAN.`);
    }
}
ParosParatlan(13);
ParosParatlan(22);
ParosParatlan(0);