<script>
let hossz=Number(prompt("Add meg a sorozat hosszát:"));
let kezdoErtek=Number(prompt("Add meg a sorozat kezdőértékét:"));
let hanyados=Number(prompt("Add meg a sorozat elemei közti különbséget:"));
for(let i=0;i<hossz;i++)
{
	document.write(kezdoErtek+",");
    kezdoErtek*=hanyados;
}
</script>