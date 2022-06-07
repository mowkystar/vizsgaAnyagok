//Víz halmazállapota
let homerseklet=Math.round(Math.random()*300)-100;
if(homerseklet<0)
{
	document.write(`A víz halmazállapota ${homerseklet} C° fokon szilárd => jég`);
}
else if (homerseklet>100)
{
	document.write(`A víz halmazállapota ${homerseklet} C° légnemű => gőz`);
}
else
{
	document.write(`A víz halmazállapota ${homerseklet} C° fokon folyékony => víz`);
}