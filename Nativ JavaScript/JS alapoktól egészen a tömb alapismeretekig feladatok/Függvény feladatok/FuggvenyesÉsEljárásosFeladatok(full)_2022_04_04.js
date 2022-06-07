<script>
//Téglalap kerület terület eljárás.
function TeglalapKeruletTerulet(aOldal, bOldal)
{
	let kerulet=2*(aOldal+bOldal);
    let terulet=aOldal*bOldal;
    document.write(`A ${aOldal}, ${bOldal} oldalú téglalap kerülete: ${kerulet}`);
    document.write(`<br>A ${aOldal}, ${bOldal} oldalú téglalap területe: ${terulet}`);
}
TeglalapKeruletTerulet(4,5);


//Melyik a kisebb? Eljárás.
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


//Páros páratlan eljárás.
function ParosParatlan(vizsgalandoSzam)
{
	if(vizsgalandoSzam%2==0)
    {
    	document.write(`<br>A vizsált szám ${vizsgalandoSzam}, PÁROS.`);
    }
    else
    {
    	document.write(`<br>A vizsált szám ${vizsgalandoSzam}, PÁRATLAN.`);
    }
}
ParosParatlan(13);
ParosParatlan(22);
ParosParatlan(0);

//FÜGGVÉNYEK: amiknek van visszatérési értéke!
 
//0-100 egész szám generáló függvény
function szamGeneralo100(){
	let randomSzam=Math.round(Math.random()*100);
    return randomSzam;
}
//Kimentem egy változóba hogy később fel tudjam más esetnél is használni
let generaltSzam=szamGeneralo100();
document.write("<br>"+generaltSzam);
ParosParatlan(generaltSzam);
document.write("<hr>");
TeglalapKeruletTerulet(szamGeneralo100(),szamGeneralo100());
document.write("<hr>");

function KetSzamSzorzasa(elsoSzam, masodikSzam){
	let szorzat=elsoSzam*masodikSzam;
    return szorzat
}
document.write(KetSzamSzorzasa(szamGeneralo100(),szamGeneralo100()));

document.write("<hr>");

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
document.write("<hr>");
function MelyikAKisebbV2(elsoParameter,masodikParameter){
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
document.write("<hr>");
//PríszámE függvény megírása(logikaival tér vissza) true/false
function PrimszamEV1(vizsgaltSzam)
{
	let oszto=0;
    for(let i=1;i<=vizsgaltSzam;i++)
    {
    	if(vizsgaltSzam%i==0)
        {
        	oszto++;
        }
    }
    if(oszto==2)
    {
    	return true;
    }
    else
    {
    	return false;
    }
}


function PrimszamEV2(vizsgaltSzam)
{
	let oszto=0;
    let eredmeny;
    for(let i=1;i<=vizsgaltSzam;i++)
    {
    	if(vizsgaltSzam%i==0)
        {
        	oszto++;
        }
    }
    if(oszto==2)
    {
    	eredmeny=true;
    }
    else
    {
    	eredmeny=false;
    }
    return eredmeny;
}
document.write(PrimszamEV1(15));
document.write(PrimszamEV2(13));
document.write(PrimszamEV2(1));
document.write("<hr>");
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
</script>

