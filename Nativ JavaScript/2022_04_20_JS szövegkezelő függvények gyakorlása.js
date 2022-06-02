<script>

document.write("<hr><hr><b>|| 04.20. || JAVASCRIPT SZÖVEGKEZELŐ FÜGGVÉNYEK GYAKORLÁSA</b><br><br>");

document.write("//Minden PÁROS indexen található karaktert töröl.//<br><br>");

function ParosKarakterTorolV1(szoveg) {
    let ujSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (i % 2 == 0) {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}
document.write(ParosKarakterTorolV1("Szeretem a programozást"));
document.write("<hr>");

document.write("//Minden PÁROS indexen található karaktert töröl.//<br><br>");

function ParosKarakterTorolV2(szoveg) {
    let ujSzoveg = "";
    for (let i = 0; i < szoveg.length; i += 2) //i=i+2
    {
        ujSzoveg += szoveg[i];
    }
    return ujSzoveg;
}
document.write(ParosKarakterTorolV2("Szeretem a programozást"));
document.write("<hr>");

document.write("//Minden PÁRATLAN indexen található karaktert töröl.//<br><br>");

function ParosKarakterMaradV1(szoveg) {
    let ujSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (i % 2 != 0) {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}
document.write(ParosKarakterMaradV1("Szeretem a programozást"));
document.write("<hr>");

document.write("//Minden PÁRATLAN indexen található karaktert töröl.//<br><br>");

function ParosKarakterMaradV2(szoveg) {
    let ujSzoveg = "";
    for (let i = 1; i < szoveg.length; i += 2) //i=i+2
    {
        ujSzoveg += szoveg[i];
    }
    return ujSzoveg;
}
document.write(ParosKarakterMaradV2("Szeretem a programozást"));
document.write("<hr>");

document.write("//Egy karaktert kiválasztva, az összeset kitörli az adott szövegből.//<br><br>");

function TabusitoV1(szoveg, tabuBetu) {
    let tabusitottSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] != tabuBetu) {
            tabusitottSzoveg += szoveg[i];
        }
    }
    return tabusitottSzoveg;
}
document.write(TabusitoV1("Szeretem a programozást", "e"));
document.write("<hr>");

document.write("//Egy karaktert kiválasztva, az összeset kitörli az adott szövegből.//<br><br>")

function TabusitoV2(szoveg, tabuBetu) {
    return szoveg.replaceAll(tabuBetu, "");
}
document.write(TabusitoV2("Szeretem a programozást", "o"));
document.write("<hr>");

//Maganhangzo tabusito: a, á, e, é, i, í, o, ó, ö, ő, u, ú, ü, ű
document.write("//Az ÖSSZES magánhangzót kitörli az adott szövegből.V1//<br><br>")

function maganhangzoTabusitoV1(szoveg) {
    let tabusitottSzoveg = "";
    let maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "Ö", "Ő", "U", "Ú", "Ü", "Ű"];
    for (let i = 0; i < szoveg.length; i++) {
        let szerepelE = false;
        for (let j = 0; j < maganHangzok.length; j++) {
            if (szoveg[i] == maganHangzok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            tabusitottSzoveg += szoveg[i];
        }
    }
    return tabusitottSzoveg;
}
let eredmeny = maganhangzoTabusitoV1("Indul a görög aludni");
document.write(eredmeny);
document.write("<hr>");

document.write("//Az ÖSSZES magánhangzót kitörli az adott szövegből.V2//<br><br>")

function maganhangzoTabusitoV2(szoveg) {
    let tabusitottSzoveg = szoveg.replaceAll("a", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("á", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("e", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("é", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("i", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("í", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("o", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("ó", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("ö", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("ő", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("u", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("ú", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("ü", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("ű", "");
    //Ugyanez nagybetűkkel
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("A", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Á", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("E", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("É", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("I", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Í", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("O", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Ó", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Ö", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Ő", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("U", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Ú", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Ü", "");
    tabusitottSzoveg = tabusitottSzoveg.replaceAll("Ű", "");
    return tabusitottSzoveg;
}
document.write(maganhangzoTabusitoV2("Indul a görög aludni"));
document.write("<hr>");

document.write("//Az ÖSSZES magánhangzót kitörli az adott szövegből.V3//<br><br>")

function maganhangzoTabusitoV3(szoveg) {
    let tabusitottSzoveg = szoveg;
    let maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "Ö", "Ő", "U", "Ú", "Ü", "Ű"];
    for (let i = 0; i < maganHangzok.length; i++) {
        tabusitottSzoveg = tabusitottSzoveg.replaceAll(maganHangzok[i], "");
    }
    return tabusitottSzoveg;
}
document.write(maganhangzoTabusitoV3("Indul a görög aludni"));
document.write("<hr>");

document.write("//NAGY kezdőbetüssé tévő függvény, utána lévő karakter kicsik lesznek. //<br><br>")

function capitalizeV1(szoveg) {
    let nagyKezdoBetusSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (i == 0) {
            nagyKezdoBetusSzoveg += szoveg[0].toUpperCase();
        } else {
            nagyKezdoBetusSzoveg += szoveg[i].toLowerCase();
        }
    }
    return nagyKezdoBetusSzoveg;
}

function capitalizeV2(szoveg) {
    let nagyKezdoBetusSzoveg = szoveg[0].toUpperCase();
    for (let i = 1; i < szoveg.length; i++) {
        nagyKezdoBetusSzoveg += szoveg[i].toLowerCase();
    }
    return nagyKezdoBetusSzoveg;
}
document.write(capitalizeV1("feri<br>"));
document.write(capitalizeV1("jÓZsi<br>"));
document.write(capitalizeV2("jÓZsi"));

</script>