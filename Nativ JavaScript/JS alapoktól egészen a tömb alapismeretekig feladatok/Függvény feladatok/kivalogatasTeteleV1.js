//Kiválogatás tétele V1    
    document.write("<br>A páros elemek a tömmben:");
    for(let i=0;i<tomb.length;i++){
    	if(tomb[i]%2==0)
        {
        	document.write(tomb[i]+",");
        }
    }