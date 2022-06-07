function PrimszamEV2(vizsgaltSzam)
{
	let oszto=0;
    let eredmeny;
    for(let i=1;i<=vizsgaltSzam;i++)
    {
    	if(vizsgaltSzam%i==0)
        {
        	oszto++;
        }
    }
    if(oszto==2)
    {
    	eredmeny=true;
    }
    else
    {
    	eredmeny=false;
    }
    return eredmeny;
}
document.write(PrimszamEV1(15));
document.write(PrimszamEV2(13));
document.write(PrimszamEV2(1));