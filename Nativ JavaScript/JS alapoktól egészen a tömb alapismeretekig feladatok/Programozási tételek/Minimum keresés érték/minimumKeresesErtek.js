let minErtek=tomb[0];
    for(let i=1;i<tomb.length;i++)
    {
    	if(tomb[i]<minErtek)
        {
        	minErtek=tomb[i];
        }
    }
    document.write("<br>A tömb legkisebb elemének értéke:"+minErtek);