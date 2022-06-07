//Melyik a kisebb?
function MelyikAKisebb(elsoParameter,masodikParameter){
	if(elsoParameter<masodikParameter)
    {
    	document.write(`<br>A ${elsoParameter},${masodikParameter} számok közül a ${elsoParameter} a kisebb`);
    }
    else if(elsoParameter>masodikParameter){
    	document.write(`<br>A ${elsoParameter},${masodikParameter} számok közül a ${masodikParameter} a kisebb`);
    }
    else
    {
    	document.write(`<br>A ${elsoParameter},${masodikParameter} számok egyenlők`);
    }
}
MelyikAKisebb(10,15);
MelyikAKisebb(21,12);
MelyikAKisebb(42,42);