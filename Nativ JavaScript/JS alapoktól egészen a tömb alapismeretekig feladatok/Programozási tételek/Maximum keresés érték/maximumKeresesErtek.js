////Maximum keresés érték alapján
    let maxErtek=tomb[0];
    for(let i=1;i<tomb.length;i++)
    {
    	if(tomb[i]>maxErtek)
        {
        	maxErtek=tomb[i];
        }
    }
    document.write("<br>A tömb legnagyobb elemének értéke:"+maxErtek);