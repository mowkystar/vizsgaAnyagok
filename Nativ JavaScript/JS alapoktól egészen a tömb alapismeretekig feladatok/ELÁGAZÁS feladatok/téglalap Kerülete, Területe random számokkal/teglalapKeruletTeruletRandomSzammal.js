//Téglalap kerület-terület random számmal
let generaltA=Math.round(Math.random()*10);//0-10 közötti egész számot
let generaltB=Math.round(Math.random()*20);//0-20 közötti egész érték
let kerulet=2*(generaltA+generaltB);
let terulet=generaltA*generaltB;
document.write(`A ${generaltA} és ${generaltB} oldalú téglalap kerülete: ${kerulet}`);
document.write("<br>A "+generaltA+" és "+generaltB+" oldalú téglalap kerülete: "+kerulet);
document.write(`<br>A ${generaltA} és ${generaltB} oldalú téglalap területe: ${terulet}`);
document.write('<br>A '+generaltA+' és '+generaltB+' oldalú téglalap területe:'+terulet);
//idézőjel - shift+2 ==> "
//aposztróf - shift+1 ==> '
//backtick - altgr+7 ==> `