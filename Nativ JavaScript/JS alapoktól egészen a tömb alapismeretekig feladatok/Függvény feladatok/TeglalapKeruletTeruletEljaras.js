//Téglalap kerület terület eljárás
function TeglalapKeruletTerulet(aOldal, bOldal)
{
	let kerulet=2*(aOldal+bOldal);
    let terulet=aOldal*bOldal;
    document.write(`A ${aOldal}, ${bOldal} oldalú téglalap kerülete: ${kerulet}`);
    document.write(`<br>A ${aOldal}, ${bOldal} oldalú téglalap területe: ${terulet}`);
}
TeglalapKeruletTerulet(4,5);