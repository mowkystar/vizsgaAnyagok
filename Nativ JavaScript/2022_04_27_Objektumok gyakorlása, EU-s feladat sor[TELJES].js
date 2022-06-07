<script>

document.write("<hr><hr><b>|| 04.27. || OBJEKTUMOK gyakorlása, EU-s feladat sor  </b><br><br>");;

const EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
]
// 1. feladat : Hány ország szerepel az Európai Unióban?
document.write("Európai unió országainak száma: " + EuropaiUnio.length);

//2. feladat : Egy adott dátumot vizsgálva, nézzük meg, hány ország csatlakozott az Unióhoz.
function csatlakozott2007() //megszámlálás tételét alkalmazzuk. 
{
    let k007 = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) //bejárom for ciklussal az EuropaiUnio elemeit 
    {
        if (EuropaiUnio[i].csatlakozas.substr(0, 4) == "2007") // substr-el kimetszük az első 4 karaktert és megadjuk h 2007, így azt vizsgáljuk.
        {
            k007++; //ha talál ilyet akkor növeljük az értékét. 
        }
    }
    document.write("<br>A 2007-ben csatlakozott országok mennyisége: " + k007);
}
csatlakozott2007();

function adottEvbenCsatlakozas(AdottEv) {
    let adottEviCsatlakozok = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) //bejárom for ciklussal az EuropaiUnio elemeit 
    {
        if (EuropaiUnio[i].csatlakozas.includes(AdottEv)) //az előző feladathoz képest annyi változás, hogy paramétert adunk meg.
        {
            adottEviCsatlakozok++; //ha talál ilyet akkor növeljük az értékét. 
        }
    }
    document.write("<br>A(z)" + AdottEv + "-ben csatlakozott országok mennyisége: " + adottEviCsatlakozok);
}
adottEvbenCsatlakozas("2004");
adottEvbenCsatlakozas("2007");

//3. feladat : Csatlakozott-e valaha Magyarország, ha igen, mikor?

function csatlakozottEMagyarorszag() {
    let csatlakozottE = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == "Magyarország") {
            csatlakozottE = true;
            document.write("<BR>Magyarország csatlakozásának dátuma: " + EuropaiUnio[i].csatlakozas);
        }
    }
    if (csatlakozottE == false) {
        document.write("<br>Magyarország nem csatlakozott az Európai Unióhoz");
    }
}
csatlakozottEMagyarorszag();

//szorgalmi
//Próbáld meg megírni, hogy bármely országra legyen lefuttatható csatlakozott-e az unióhoz és ha igen, mikor?

function csatlakozottEAdottOrszag(orszagNeve) {
    let csatlakozottE = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == orszagNeve) {
            csatlakozottE = true;
            document.write("<BR>" + orszagNeve + " csatlakozásának dátuma: " + EuropaiUnio[i].csatlakozas);
        }
    }
    if (csatlakozottE == false) {
        document.write("<br>" + orszagNeve + " nem csatlakozott az Európai Unióhoz");
    }
}
csatlakozottEAdottOrszag("Málta");
csatlakozottEAdottOrszag("Svájc");

//Nézd meg, volt-e Májusi csatlakozás!

function MajusiCsatlakozas() {
    let majusiCsatlakozas = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
            majusiCsatlakozas = true;
        }
    }
    if (majusiCsatlakozas == false) {
        document.write("<br>Nem volt Májusban csatlakozás");
    } else {
        document.write("<br>Volt Májusban csatlakozás!");
    }
}
MajusiCsatlakozas();

//Próbáld meg bármilyen hónapra megírni a csatlakozás ellenőrzését!

function BarmilyenHonapbeliCsatlakozas(honap) {
    let honapID;
    if (honap < 10) {
        honapID = ".0" + honap + ".";
    } else {
        honapID = "." + honap + ".";
    }
    let adottHonapCsatlakozas = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(honapID)) {
            adottHonapCsatlakozas = true;
        }
    }
    if (adottHonapCsatlakozas == false) {
        document.write("<br>Nem volt " + honap + ". hónapban csatlakozás!");
    } else {
        document.write("<br>Volt " + honap + ". hónapban csatlakozás!");
    }
}
BarmilyenHonapbeliCsatlakozas(5);
BarmilyenHonapbeliCsatlakozas(2);

//Határozzuk meg, ki volt az utolsó csatlakozó
//Megjegyzés, az utolsó évben csak 1 csatlakozás történt!
//Index alapú maximum keresés

function legutolsoCsatlakozo() {
    let maxEvIndex = 0;
    for (let i = 1; i < EuropaiUnio.length; i++) {
        let aktIndexEv = Number(EuropaiUnio[i].csatlakozas.substr(0, 4));
        let maxIndexEv = Number(EuropaiUnio[maxEvIndex].csatlakozas.substr(0, 4));
        if (aktIndexEv > maxIndexEv) {
            maxEvIndex = i;
        }
    }
    document.write("<br>A legutoljára csatlakozott ország neve:" + EuropaiUnio[maxEvIndex].orszag);
}
legutolsoCsatlakozo();

//Statisztika - melyik évben hány ország csatlakozott
function EvekAlapjanListazasStatisztika(){
	//Évek kigyűjtése
    let evTomb= [];
    for(let i=0;i<EuropaiUnio.length;i++)
    {
    	let szerepelE=false;
        for(let j=0;j<evTomb.length;j++)
        {
        	if(evTomb[j]==EuropaiUnio[i].csatlakozas.substr(0,4))
            {
            	szerepelE=true;
            }
        }
        if(szerepelE==false)
        {
        	evTomb.push(EuropaiUnio[i].csatlakozas.substr(0,4));
        }        
    }
    //Évek rendezése
    evTomb.sort();
    //Évek mennyiségének megszámolása
    let evSegedTomb=[];
    for(let i=0;i<evTomb.length;i++)
    {
    	evSegedTomb.push(0);
    }
    for(let i=0;i<EuropaiUnio.length;i++)
    {
        for(let j=0;j<evTomb.length;j++)
        {
        	if(evTomb[j]==EuropaiUnio[i].csatlakozas.substr(0,4))
            {
            	evSegedTomb[j]++;
            }
        }
    }
    //Eredmény megjelenítése
    document.write("<br>Statisztika:");
    for(let i=0;i<evTomb.length;i++)
    {
    	document.write("<br>"+evTomb[i]+" : "+evSegedTomb[i]+" ország csatlakozott");
    }
}
EvekAlapjanListazasStatisztika();


</script>
