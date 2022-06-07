let vizsgaltSzam1=Math.round(Math.random()*20);
	let vizsgaltSzam2=Math.round(Math.random()*20);
    let kisebb=1;
    if(vizsgaltSzam1<vizsgaltSzam2)
    {
    	kisebb=vizsgaltSzam1;
    }
    else
    {
    	kisebb=vizsgaltSzam2;
    }
	let LNKO=1;
	for(let i=1;i<kisebb;i++)
    {
    	if(vizsgaltSzam1%i==0 && vizsgaltSzam2%i==0)
        {
        	LNKO=i;
        }
    }
    document.write(`A két szám (${vizsgaltSzam1},${vizsgaltSzam2}) legnagyobb közös osztója:${LNKO}`);
    