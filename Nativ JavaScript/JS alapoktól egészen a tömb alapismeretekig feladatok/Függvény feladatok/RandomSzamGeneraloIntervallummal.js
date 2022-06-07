function RandomSzamGeneraloIntervallummal(alsoHatar,felsoHatar){
    	let generaltSzam=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
        document.write("A függvénnyel kigenerált szám:"+generaltSzam);
    }
    RandomSzamGeneraloIntervallummal(10,50);