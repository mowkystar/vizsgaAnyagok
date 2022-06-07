//Maximum keresés index alapján
    let maxIndex=0;
    for(let i=1;i<tomb.length;i++)
    {
    	if(tomb[i]>tomb[maxIndex])
        {
        	maxIndex=i;
        }
    }
    document.write("<br>A tömb legnagyobb elemének értéke:"+tomb[maxIndex]);
    document.write("<br>A tömb legnagyobb elemének indexe:"+maxIndex);
    document.write("<br>A tömb legnagyobb elemének helye:"+(maxIndex+1));