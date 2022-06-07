//Megszámálás tétele:
    //Megszámolja hány adott(T) tulajdonságú elemünk van a tömbben(páros szám, negatív szám, true érték, 
    //vagy épp 5 karakternél hosszabb karakterlánc stb... 
    //olyasmi mint a darabteli függvény excelben
    
    //Feladat számoljuk meg hány darab páros szám van a tömbben!
    //darab=0
    //feltétel: (tomb[i]%2==0)
    let darab=0;
    for(let i=0;i<tomb.length;i++)
    {
    	if(tomb[i]%2==0)
        {
        	darab++;
        }
    }
    document.write("<br>A tömbben lévő páros elemek száma:"+darab);