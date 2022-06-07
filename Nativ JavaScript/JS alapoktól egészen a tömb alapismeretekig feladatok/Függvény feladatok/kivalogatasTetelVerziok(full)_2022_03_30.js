<script>
	let tomb=[];
    for(let i=0;i<10;i++)
    {
    	let generaltSzam=Math.round(Math.random()*100);
        tomb.push(generaltSzam);
    }
    
    document.write(tomb);
    for(let i=0;i<tomb.length;i++)// de írhattunk volna akár feltételnek i<20-at is akár
    {
    	document.write("<br>A tömböm "+i+". indexű eleme értéke:"+tomb[i]);
    	//i az az index(tömbhely) 
    	//tomb[i] pedig az i. helyen lévő elem értéke
    }
    
    //Kiválogatás tétele V1    
    document.write("<br>A páros elemek a tömmben:");
    for(let i=0;i<tomb.length;i++){
    	if(tomb[i]%2==0)
        {
        	document.write(tomb[i]+",");
        }
    }
    //Kiválogatás tétele V2
    let parosak=[];
    for(let i=0;i<tomb.length;i++){
    	if(tomb[i]%2==0)
        {
        	parosak.push(tomb[i]);
        }
    }
    document.write("<br>A páros elemek a tömmben:"+parosak);
</script>
