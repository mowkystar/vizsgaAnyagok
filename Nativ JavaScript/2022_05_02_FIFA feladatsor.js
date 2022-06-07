<script>

document.write("<hr><b>|| 05.02. || FIFA FELADAT SOR & TISZTAKÓD elveinek megbeszélése </b><br>");
document.write("<hr>FIFA feladatsor<br><br>");
//Adatok sorrendje: Csapat;Helyezes;Valtozas;Pontszam
const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];

function ObjektumFeltolto(feltoltendoElem)
{
	const beolvasottAdatok=[];
    for(let i=0;i<feltoltendoElem.length;i++)
    {
     	let objektum={};
        let daraboltAdatSor=feltoltendoElem[i].split(';');
        objektum.csapat=daraboltAdatSor[0];
        objektum.helyezes=daraboltAdatSor[1];
        objektum.valtozas=daraboltAdatSor[2];
        objektum.pontszam=daraboltAdatSor[3];
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}

const fifaAdatok=ObjektumFeltolto(csapatAdat);
for(let i=0;i<fifaAdatok.length;i++)
{
	document.write(fifaAdatok[i].csapat+":"+fifaAdatok[i].helyezes+":"+fifaAdatok[i].valtozas+":"+fifaAdatok[i].pontszam+"<br>");
}

//Hány csapat szerepel az aktuális listában
function CsapatokSzama(adatTomb){
	document.write("1. feladat: A fifa ranglistában lévő csapatok száma:"+adatTomb.length);
}
CsapatokSzama(fifaAdatok);
//Mennyi a csapatok átlagos pontszáma...
function CsapatokAtlagosPontszama(adatTomb)
{
	let osszPont=0;
    for(let i=0;i<adatTomb.length;i++)
    {
    	osszPont+=Number(adatTomb[i].pontszam);
    }
    return osszPont/adatTomb.length;
}
document.write("<br>2. feladat: A csapatok átlagos pontszáma:"+CsapatokAtlagosPontszama(fifaAdatok));

//Az átlagnál több pontot szerző csapatokat listázd ki! (nem kell visszatérési érték!)
function AtlagFelettiek(adatTomb, atlag)
{
	document.write("<br>3. feladat: Az átlag feletti pontszámmal rendelkező csapatok listája:");
	for(let i=0;i<adatTomb.length;i++)
    {
    	if(adatTomb[i].pontszam>atlag)
        {
        	document.write("<br>"+adatTomb[i].csapat);
        }
    }
}
AtlagFelettiek(fifaAdatok, CsapatokAtlagosPontszama(fifaAdatok));

document.write("//Az átlagnál több pontot szerző csapatokat listázd ki tömb visszatérési értékkel!//<br><br>");
 
   function AtlagFelettiekVisszateressel(adatTomb, atlag)
{
	let atlagFelettiek=[];
	for(let i=0;i<adatTomb.length;i++)
    {
    	if(adatTomb[i].pontszam>atlag)
        {
        	atlagFelettiek.push(adatTomb[i].csapat);
        }
    }
    return atlagFelettiek;
}
let visszateresiAdatok= AtlagFelettiekVisszateressel(fifaAdatok, CsapatokAtlagosPontszama(fifaAdatok));
document.write(visszateresiAdatok);

document.write("<hr>");
document.write("//Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma!//<br>");
/*
pl.:
	Helyezés: 13
	Csapat: Hollandia
	Pontszáma: 1586
*/

function LegtobbetJavito(adatTomb)
{
	let legjobbIndex=0;
    for(let i=0;i<adatTomb.length;i++)
    {
    	if(adatTomb[i].valtozas>adatTomb[legjobbIndex].valtozas)
        {
        	legjobbIndex=i;
        }
    }
    return legjobbIndex;
}
let bestIndex=LegtobbetJavito(fifaAdatok);
document.write("<br>A legtöbbet javító csapat adatai:");
document.write("<br>Helyezés: "+fifaAdatok[bestIndex].helyezes);
document.write("<br>Csapat: "+fifaAdatok[bestIndex].csapat);
document.write("<br>Pontszáma: "+fifaAdatok[bestIndex].pontszam);


document.write("<hr>");
document.write("//Határozza meg a adatok között megtalálható-e Magyarország csapata!//<br>");
/*
pl.: 
	"A csapatok között nincs Magyarország" 
	illetve
	"A csapatok között szerepel Magyarország"
*/

function VanEMagyarorszag(adatTomb)
{
	let szerepelE=false;
   for(let i=0;i<adatTomb.length;i++)
   {
   	if(adatTomb[i].csapat=="Magyarország")
     {
     	szerepelE=true;
     }
     
   }
   if(szerepelE==true)
   {
   	document.write("<br>A csapatok között szerepel Magyarország");
   }
   else
   document.write("<br>A csapatok között nincs Magyarország");
}
VanEMagyarorszag(fifaAdatok);

document.write("<hr>");
document.write("//Készítsen statisztikát a változásokról csapatok száma szerint,és csak azokat írja ki ahol több mint 1 csapat szerepel!//<br><br>");

function ValtozasKivalogato(adatTomb){
	let valtozasTipusok=[];
    for( let i=0;i<adatTomb.length;i++)
    {
    	let SzerepelE=false;
        for(let j=0;j<valtozasTipusok.length;j++)
        {
        	if(adatTomb[i].valtozas==valtozasTipusok[j])
            {
            	SzerepelE=true;
            }
        }
        if(SzerepelE==false)
        {
        	valtozasTipusok.push(adatTomb[i].valtozas);
        }
    }
    return valtozasTipusok;
}
let szuroLista=ValtozasKivalogato(fifaAdatok);
function ValtozasMegszamlalo(adatTomb, megszamalasFeltelei)
{
	let valtozasTipusokSeged=[];
    for(let i=0;i<megszamalasFeltelei.length;i++)
    {
    	valtozasTipusokSeged.push(0);
    }
    for( let i=0;i<adatTomb.length;i++)
    {
        for(let j=0;j<megszamalasFeltelei.length;j++)
        {
        	if(adatTomb[i].valtozas==megszamalasFeltelei[j])
            {
            	valtozasTipusokSeged[j]++;
            }
        }
    }
    return valtozasTipusokSeged;
}
document.write(szuroLista);
let szuroListaSeged=ValtozasMegszamlalo(fifaAdatok, szuroLista);
document.write(szuroListaSeged);
function StatisztikaMegjelenito(szuresiFeltetel, szurtmennyiseg)
{
	document.write("<br>6. feladat: Statisztika:");
	for(let i=0;i<szuresiFeltetel.length;i++)
    {
    	if(szurtmennyiseg[i]>1)
        {
        	document.write("<br>"+szuresiFeltetel[i]+" helyet változott:"+ szurtmennyiseg[i]);
        }
    }
}
StatisztikaMegjelenito(szuroLista, szuroListaSeged);


</script>