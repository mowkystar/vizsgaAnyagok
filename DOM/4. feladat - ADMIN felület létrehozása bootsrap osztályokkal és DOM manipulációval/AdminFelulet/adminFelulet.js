aktivalo.addEventListener("click", mindenCheck);
function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

deaktivalo.addEventListener("click", mindenUnCheck);
function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}

csikozaski.addEventListener("click", CsikozasKi);
function CsikozasKi() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.remove("table-striped");
}

csikozasbe.addEventListener("click", CsikozasBe);
function CsikozasBe() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.add("table-striped");
}

darkMode.addEventListener("click", DarkMode);
function DarkMode() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.remove("table-light");
    tablaObjektum.classList.add("table-dark");
    document.body.style.backgroundImage = "linear-gradient(to right, black, grey, black)";
}

lightMode.addEventListener("click", LightMode);
function LightMode() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.replace("table-dark", "table-light");
    document.body.style.backgroundImage = "linear-gradient(to right, white, grey, white)";
}

tesztSor.addEventListener("click", ujTablaSor);
function ujTablaSor() {
    let tablaObjektum = document.querySelector("table");
    let sor = tablaObjektum.insertRow();
    let tablaAdat1 = sor.insertCell();
    let tablaAdat2 = sor.insertCell();
    let tablaAdat3 = sor.insertCell();
    let tablaAdat4 = sor.insertCell();
    let tablaAdat5 = sor.insertCell();
    let tablaAdat6 = sor.insertCell();
    tablaAdat1.innerHTML = "teszt";
    tablaAdat2.innerHTML = "teszt";
    tablaAdat3.innerHTML = "teszt";
    tablaAdat4.innerHTML = "teszt";
    tablaAdat5.innerHTML = "teszt";
    tablaAdat6.innerHTML = "teszt";
}

sorTorles.addEventListener("click", utolsoSorTorles);
function utolsoSorTorles() {
    let tablaObjektum = document.querySelector("table");
    let utolsoSorID = tablaObjektum.rows.length - 1;
    tablaObjektum.deleteRow(utolsoSorID);
}


function ujTablaSorUrlapbol() {
    let tablaObjektum = document.querySelector("table");
    let sor = tablaObjektum.insertRow();
    let tablaAdat1 = sor.insertCell();
    let tablaAdat2 = sor.insertCell();
    let tablaAdat3 = sor.insertCell();
    let tablaAdat4 = sor.insertCell();
    let tablaAdat5 = sor.insertCell();
    let tablaAdat6 = sor.insertCell();
    tablaAdat1.innerHTML = document.querySelector("#veznev").value;
    tablaAdat2.innerHTML = document.querySelector("#kernev").value;
    tablaAdat3.innerHTML = document.querySelector("#email").value;
    tablaAdat4.innerHTML = document.querySelector("#tel").value;
    tablaAdat5.innerHTML = document.querySelector("#beosztas").value;
    tablaAdat6.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

function VezNevCheck() {
    let minta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
    let ertek = document.querySelector("#veznev").value;
    if (minta.test(ertek))//logikai értékkel tér vissza, alpnak true esetén fut le az if ág!
    {
        return true;
    }
    else {
        return false;
    }
}

function KerNevCheck() {
    let minta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
    let ertek = document.querySelector("#kernev").value;
    if (minta.test(ertek))//logikai értékkel tér vissza, alpnak true esetén fut le az if ág!
    {
        return true;
    }
    else {
        return false;
    }
}

function EmailCheck() {
    let minta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
    let ertek = document.querySelector("#email").value;
    if (minta.test(ertek))//logikai értékkel tér vissza, alpnak true esetén fut le az if ág!
    {
        return true;
    }
    else {
        return false;
    }
}


function TelCheck() {
    let minta = /([0-9]{3})-([0-9]{4})$/;
    let ertek = document.querySelector("#tel").value;
    if (minta.test(ertek))//logikai értékkel tér vissza, alpnak true esetén fut le az if ág!
    {
        return true;
    }
    else {
        return false;
    }
}

adatFeltoltes.addEventListener("click", ujTablaSorUrlapbolEllenorzessel);
function ujTablaSorUrlapbolEllenorzessel() {
    let uzenetSzovege="Sikertelen adatfeltöltés: ";
    let modositandoElem=document.querySelector("#progressMessage");
    if(VezNevCheck()==true && KerNevCheck()==true && EmailCheck() && TelCheck()) {
        modositandoElem.classList.remove("alert-info");
        modositandoElem.classList.remove("alert-danger");
        modositandoElem.classList.add("alert-success");
        modositandoElem.innerHTML="Sikeres adatfeltöltés";
        ujTablaSorUrlapbol();//Ha jó az input érték meghívom!
    }
    else{
        if(VezNevCheck()==false)
        {
            uzenetSzovege=uzenetSzovege+" Nem megfelelő vezetéknév!";
        }
        if(KerNevCheck()==false)
        {
            uzenetSzovege=uzenetSzovege+" Nem megfelelő keresztnév!";
        }
        if(!EmailCheck())
        {
            uzenetSzovege+=" Nem megfelelő e-mail cím formátum!";
        }
        if(!TelCheck())
        {
            uzenetSzovege+=" Nem megfelelő telefonszám formátum!";
        }
        modositandoElem.classList.remove("alert-info");
        modositandoElem.classList.remove("alert-success");
        modositandoElem.classList.add("alert-danger");
        modositandoElem.innerHTML=uzenetSzovege;
    }
}

tel.addEventListener("input",kotojelBeilleszt);
function kotojelBeilleszt() {
    let telefonMezo=document.querySelector("#tel").value;
    if(telefonMezo.length==3)
    {
        document.querySelector("#tel").value=telefonMezo+"-";
    }
}




        