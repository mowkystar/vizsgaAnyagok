<script>
	let szam=0;
	let megfelelo=false;
    do
    {
    	szam=Number(prompt("Adj meg egy számot:"));
        if(szam>0)
        {
        	megfelelo=true;
        }
    }while(megfelelo==false);
    document.write(szam);
</script>