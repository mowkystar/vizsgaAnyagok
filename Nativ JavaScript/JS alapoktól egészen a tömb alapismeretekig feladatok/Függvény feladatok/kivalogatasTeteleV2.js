//Kiválogatás tétele V2
    let parosak=[];
    for(let i=0;i<tomb.length;i++){
    	if(tomb[i]%2==0)
        {
        	parosak.push(tomb[i]);
        }
    }
    document.write("<br>A páros elemek a tömmben:"+parosak);