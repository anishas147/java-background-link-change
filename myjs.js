function changeBackground(){
var r= Math.floor(Math.random()*256).toString();
var g= Math.floor(Math.random()*256).toString();
var b= Math.floor(Math.random()*256).toString();
var color= "rgb("+r+","+g+","+b+")";
document.body.style.backgroundColor=color;
}

function changelink(){
	var randNum=Math.floor(Math.random()*10000).toString();
	var newLink="https://twitter.com/"+randNum;
	document.getElementById("wordLink").href=newLink;
	
}


//rgb (255,255,255) is white (0,0,0) is black//