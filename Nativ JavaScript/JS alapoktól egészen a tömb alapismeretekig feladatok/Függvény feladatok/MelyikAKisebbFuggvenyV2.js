unction MelyikAKisebbV2(elsoParameter,masodikParameter){
	if(elsoParameter<masodikParameter){
    	return elsoParameter
    }
    else if(elsoParameter>masodikParameter){
    	return masodikParameter;
    }
    else{//elsoParameter==masodikParameter
    	return masodikParameter;//visszatérhetek akár az első paraméterrel is! - elsoParameter;
    }
}
document.write(MelyikAKisebbV2(10,15));