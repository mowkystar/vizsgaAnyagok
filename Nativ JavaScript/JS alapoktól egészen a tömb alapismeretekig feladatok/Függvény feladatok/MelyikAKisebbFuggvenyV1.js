//Melyik a kisebb
function MelyikAKisebbV1(elsoParameter,masodikParameter){
	let kisebb;
	if(elsoParameter<masodikParameter){
    	kisebb=elsoParameter;
    }
    else if(elsoParameter>masodikParameter){
    	kisebb=masodikParameter;
    }
    else{//elsoParameter==masodikParameter
    	kisebb=masodikParameter;//visszatérhetek akár az első paraméterrel is! - elsoParameter;
    }
    return kisebb;
}
document.write(MelyikAKisebbV1(10,15));