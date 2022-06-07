<script>

document.write("<hr><hr><b>|| 04.25. || JAVASCRIPT SZÖVEGKEZELÉS & FÜGGVÉNYEK</b> <br><br>");

document.write("//<b>CAMELCASE</b> - A szóösszetételeket szavakra szedi és az első karakter kis betű utána szavanként az első Karakter NAGY betű lesz. Pl: Ha volt egy szövEged -->haVoltEgySzöveged //<br><br>")

function capitalize(szoveg) {
    let nagyKezdoBetusSzoveg = szoveg[0].toUpperCase();
    for (let i = 1; i < szoveg.length; i++) {
        nagyKezdoBetusSzoveg += szoveg[i].toLowerCase();
    }
    return nagyKezdoBetusSzoveg;
}

function camelCase(kifejezes) {
    let kifejezesDarabok = kifejezes.split(' ');
    let camelCaseSzoveg = "";
    for (let i = 0; i < kifejezesDarabok.length; i++) {
        if (i == 0) {
            camelCaseSzoveg += kifejezesDarabok[0].toLowerCase();
        } else {
            camelCaseSzoveg += capitalize(kifejezesDarabok[i]);
        }
    }
    return camelCaseSzoveg;
}
document.write(camelCase("Ez egy mintaszöveg camEl case felAdathoz"));
document.write("<hr>");


document.write("//LEET - Kicserél bizonyos karaktereket a szövegünkben.//<br><br>");
//L33t szöveg generátor
//Cseréld le az alábbi karaktereket a nyíllal mögöttük megadott számra
//a->4
//s->5
//t->7
//b->8
//i->1
//e->3
//o->0
//az összes többi marad az eredeti
function leetSzovegGeneratorV1(kifejezes) {
    let ujSzoveg = "";
    for (let i = 0; i < kifejezes.length; i++) {
        if (kifejezes[i] == "a" || kifejezes[i] == "A") {
            ujSzoveg += "4";
        } else if (kifejezes[i] == "s" || kifejezes[i] == "S") {
            ujSzoveg += "5";
        } else if (kifejezes[i] == "t" || kifejezes[i] == "T") {
            ujSzoveg += "7";
        } else if (kifejezes[i] == "b" || kifejezes[i] == "B") {
            ujSzoveg += "8";
        } else if (kifejezes[i] == "i" || kifejezes[i] == "I") {
            ujSzoveg += "1";
        } else if (kifejezes[i] == "e" || kifejezes[i] == "E") {
            ujSzoveg += "3";
        } else if (kifejezes[i] == "o" || kifejezes[i] == "O") {
            ujSzoveg += "0";
        } else {
            ujSzoveg += kifejezes[i];
        }
    }
    return ujSzoveg;
}
document.write(leetSzovegGeneratorV1("Indul a görög aludni"));
document.write("<br>");

function leetSzovegGeneratorV2(kifejezes) {
    let leetSzoveg = kifejezes.replaceAll("o", "0");
    leetSzoveg = leetSzoveg.replaceAll("O", "0");
    leetSzoveg = leetSzoveg.replaceAll("i", "1");
    leetSzoveg = leetSzoveg.replaceAll("I", "1");
    leetSzoveg = leetSzoveg.replaceAll("e", "3");
    leetSzoveg = leetSzoveg.replaceAll("E", "3");
    leetSzoveg = leetSzoveg.replaceAll("a", "4");
    leetSzoveg = leetSzoveg.replaceAll("A", "4");
    leetSzoveg = leetSzoveg.replaceAll("s", "5");
    leetSzoveg = leetSzoveg.replaceAll("S", "5");
    leetSzoveg = leetSzoveg.replaceAll("t", "7");
    leetSzoveg = leetSzoveg.replaceAll("T", "7");
    leetSzoveg = leetSzoveg.replaceAll("b", "8");
    leetSzoveg = leetSzoveg.replaceAll("B", "8");
    return leetSzoveg;
}
document.write(leetSzovegGeneratorV2("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
document.write("<br>");
document.write(leetSzovegGeneratorV2("astbieo"));
document.write("<br>");
document.write(leetSzovegGeneratorV2("a, á, b, c, cs, d, dz, dzs, e, é, f, g, gy, h, i, í, j, k, l, ly, m, n, ny, o, ó, ö, ő, p, r, s, sz, t, ty, u, ú, ü, ű, v, z, zs"));


document.write("<hr>");
document.write("//3-5-7 paraméterekre kirajzol egy keresztet(plusz).//<br><br>");
//  + 
// +++
//  +

//   +
//   +
// +++++
//   +
//   +

//    +   
//    +
//    +
// +++++++
//    +
//    +
//    +
//Méret értéke csak páratlan szám lehet

function pluszRajzolo(meret) {
    if (meret % 2 == 0) {
        document.write("A függvény paramétere nem megfelelő");
    } else {
        let index = (meret - 1) / 2;
        for (let i = 0; i < meret; i++) {
            let sor = "";
            if (i == index) {
                for (let j = 0; j < meret; j++) {
                    sor += "+";
                }
            } else {
                for (let j = 0; j < meret; j++) {
                    if (j == index) {
                        sor += "+";
                    } else {
                        sor += " ";
                    }
                }
            }
            document.write("<pre>" + sor + "<pre>");
        }
    }
}
pluszRajzolo(11);
document.write("<hr>");

document.write("//OBJEKTUM  ALAPOK - tömb feltöltése objektumokkal //<br><br>");

let objektum = {};
objektum.id = 6;
objektum.nev = "Kecskemét";
objektum.kor = "25";

document.write(objektum.id);
document.write("<br>" + objektum.nev);
document.write("<br>" + objektum.kor);
document.write("<br>");

//Objektum típusú tömb
let adatok = [];
adatok.push(objektum);
document.write(adatok[0].id + " " + adatok[0].nev + " " + adatok[0].kor);
document.write("<br>");

adatok[0].nev = "Koaxt Ábel"; //azzal, hogy 0. elemnek új nevet adtam, így felülírtam a "Kecskemét" nevet fentebb.
document.write(adatok[0].id + " " + adatok[0].nev + " " + adatok[0].kor);

</script>