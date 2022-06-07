//PríszámE függvény megírása(logikaival tér vissza) true/false
function PrimszamEV1(vizsgaltSzam)
{
	let oszto=0;
    for(let i=1;i<=vizsgaltSzam;i++)
    {
    	if(vizsgaltSzam%i==0)
        {
        	oszto++;
        }
    }
    if(oszto==2)
    {
    	return true;
    }
    else
    {
    	return false;
    }
}