//Víz halmazállapot, stringgel térjen vissza: "szilard", "folyekony", "legnemu"
function VizHalmazAllapotV1(homerseklet){
	if(homerseklet<=0)
    {
    	return "szilard";
    }
    else if(homerseklet>=100){
    	return "legnemu";
    }
    else{
    	return "folyekony";
    }
}