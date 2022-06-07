<script>
	//EGYSZERŰ FÜGGVÉNY LÉTREHOZÁSA

	function FuggvenyNeve()//Függvény létrehozása
    {
    	document.write("Szeretem a programozást");
    }
    //FuggvenyNeve();//Függvény meghívása
    
    function RandomSzamGeneralo(){
    	let generaltSzam=Math.round(Math.random()*100);
        document.write(generaltSzam);
    }
    //RandomSzamGeneralo();    
    
    
    
    //PARAMÉTEREK HASZNÁLATA
    
    function SzamKiiro(szam){
    	document.write("A függvényben megadott szám:"+szam);
    }
    //SzamKiiro(6);
    
    function RandomSzamGeneraloIntervallummal(alsoHatar,felsoHatar){
    	let generaltSzam=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
        document.write("A függvénnyel kigenerált szám:"+generaltSzam);
    }
    //RandomSzamGeneraloIntervallummal(10,50);
    
    //FELADATOK:
    
    //CsapatInfo
    function CsapatInfo()
    {
    	document.write("Nagy Ferenc");
    	document.write("<br>Oktató");
    	document.write("<br>#AllTeam");
    }
    //CsapatInfo();
    
    //Két szám összeszorzo
    function KetSzamOsszeSzorzo(szam1,szam2){
    	document.write(`A két szám ${szam1},${szam2} szorzata: ${szam1*szam2}`)
    }
    KetSzamOsszeSzorzo(4,2);
</script>
