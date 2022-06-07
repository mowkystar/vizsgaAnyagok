function VizHalmazAllapotV2(homerseklet){
	if(homerseklet<=0)
    {
    	return "szilard";
    }
    else if(homerseklet>=100){
    	return "legnemu";
    }
    return "folyekony";
}
document.write(VizHalmazAllapotV2(-30));
document.write("<hr>");
document.write(VizHalmazAllapotV2(210));
document.write("<hr>");
document.write(VizHalmazAllapotV2(60));