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
