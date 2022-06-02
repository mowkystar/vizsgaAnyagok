<script>
document.write("<hr><hr><b>|| 03.28. || Tömb alapismeretek & Programozási Tételek</b><hr><hr>");
document.write("<b>Feladat:</b> A legnagyobb közös osztó (LNKO) és relatív prím");

	let vizsgaltSzam1=Math.round(Math.random()*1000);
	let vizsgaltSzam2=Math.round(Math.random()*1000);
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
    for (let i=0;i<kisebb;i++)
    {
    	if(vizsgaltSzam1%i==0 && vizsgaltSzam2%i==0)
        {
        	LNKO=i;
        }
    }
	document.write(`<br>A két szám (${vizsgaltSzam1},${vizsgaltSzam2}) legnagyobb közös osztója: ` +LNKO);
//Relatív prím meghatározása
	if(LNKO==1)
    {
    	document.write("<br>A két szám (" +vizsgaltSzam1+","+vizsgaltSzam2+") relatív prím mert a legnagyobb közös osztója: " +LNKO+"<br>"); 
    }
    else
    {
    	document.write("<br>A két szám (" +vizsgaltSzam1+","+vizsgaltSzam2+") <b>NEM</b> relatív prím mert a legnagyobb közös osztója:" +LNKO+"<br>");
    }

document.write("<br><b>tömb létrehozás és random számokkal feltöltés és indexelés</b>");
	let tomb=[]; //létrehozzunk egy üres tömböt.
    for (let i=0;i<10;i++)	//for ciklussal megadjuk a tömb méretét és végig futtatjuk.
    {
    	let generaltSzam=Math.round(Math.random()*100); //generálunk 0-100ig 20db számot.
        tomb.push(generaltSzam); //feltöltjük random számokkal a tömböt.
    }
    document.write("<br>"+tomb); //kiiratjuk a tömbünket.
    
    for (let i=0;i<tomb.length;i++) //de lehetme i<10 is, az is ugyan az.
    {
    	document.write("<br>A tömböm "+i+". indexű eleme: "+tomb[i]);
        //az i az index(tömbhely)
        //a tomb[i] az i. helyen lévő elem értéke
    }

document.write("<br><br><b>Összegzés tétele - Összeadja a tömb elemeinek értékeit!</b>");
	let osszeg=0;
    for(let i=0;i<tomb.length;i++) //for ciklussal végig megyünk a tömbünkön.
    {
    	osszeg+=tomb[i]; //az osszeg változóhoz minden elemet hozzáad.
    }
    document.write("<br>A tömb eleminek összege: "+osszeg); 
    
document.write("<br><br><b>Átlagszámítás tétele - Összeadja a tömb elemeinek értékeit és átlagolja!</b>");
	let atlag=0;
    for (let i=0;i<tomb.length;i++)
    {
    	atlag+=tomb[i];
    }
    document.write("<br>A tömb elemeinek átlaga: "+atlag/tomb.length); //a feltöltött atlag valtozót elosztjuk a tömb hosszával így átlagoljuk.

document.write("<br><br><b>Minimum keresés érték alapján - Megkeresi a tömb legkisebb elemét! </b>");
	let minErtek=tomb[0];	//létrehozunk egy változót amibe a tömb [0] elemét adjuk meg.
    for (let i=0;i<tomb.length;i++) //for ciklussal végig megyünk a tömbbön.
    {
    	if(tomb[i]<minErtek) //Ha tömb i. eleme kisebb mint minErtek(azaz a tömb 0. indexű eleménél) akkor...
        {
        	minErtek=tomb[i]; //Akkor a minErtek vegye fel az adott tömb i. elemét.
        }
    }
    document.write("<br>A tömb legkisebb értéke: "+minErtek); //irassuk ki a minErtek-et.
    
document.write("<br><br><b>Maximum keresés érték alapján - Megkeresi a tömb legnagyobb elemét! </b>");
	let maxErtek=tomb[0];	//létrehozunk egy változót amibe a tömb [0] elemét/értékét adjuk meg.
    for (let i=0;i<tomb.length;i++) //for ciklussal végig megyünk a tömbbön.
    {
    	if(tomb[i]>maxErtek) //Ha tömb i. eleme NAGYOBB mint maxErtek(azaz a tömb 0. indexű eleménél) akkor...
        {
        	maxErtek=tomb[i]; //Akkor a maxErtek vegye fel az adott tömb i. elemét.
        }
    }
    document.write("<br>A tömb legkisebb értéke: "+maxErtek); //irassuk ki a maxErtek-et.
    
document.write("<br><br><b>Minimum keresés index alapján - Megkeresi a tömb legkisebb értékének indexét. </b>");
	//Pl: ha a tömbünkben a legkisebb érték a 12, és ez az érték a tömb 8. helyén(indexén) van,
    //Akkor az érték 8 lesz.
	let minIndex=0;		//0 -- azaz ez a 0. index.
    for( let i=0;i<tomb.length;i++) //for ciklussal végig megyünk a tömbbön.
    {
    	if(tomb[i]<tomb[minIndex])	//Ha a tömb [i]. eleme kisebb mint a tömb minIndex eleménél...
        {
        	minIndex=i; //Akkor növeljük a minIndex értékét.
        }
    }
    document.write("<br>A legkisebb érték ("+minErtek+") a következő indexen található: "+minIndex);

document.write("<br><br><b>Maximum keresés index alapján - Megkeresi a tömb legnagyobb értékének indexét. </b>");
	//Pl: ha a tömbünkben a legnagyobb érték a 100, és ez az érték a tömb 5. helyén(indexén) van,
    //Akkor az érték 5 lesz.
	let maxIndex=0;		//0 -- azaz ez a 0. index.
    for( let i=0;i<tomb.length;i++) //for ciklussal végig megyünk a tömbbön.
    {
    	if(tomb[i]>tomb[maxIndex])	//Ha a tömb [i]. eleme nagyobb mint a tömb maxIndex eleménél...
        {
        	maxIndex=i; //Akkor növeljük a maxIndex értékét.
        }
    }
    document.write("<br>A legnagyobb érték ("+maxErtek+") a következő indexen található: "+maxIndex);
    
document.write("<br><br><b>Megszámlálás tétele - PL: megszámolja a tömbünkben a páros számokat</b>");
	let darab=0;
    for (let i=0;i<tomb.length;i++)
    {
    	if (tomb[i]%2==0) 
        //Ha ==1 akkor a páratlan számokat számoljuk.
        {
        	darab++;
        }
    }
    document.write("<br>A tömbben található páros számok: "+darab);
    
document.write("<hr><hr><b>|| 03.30. || Függvény alapismeretek</b><hr><hr>");
</script>