var boje = ["blue", "red", "yellow", "green", "orange", "purple", "black", "pink", "grey"];
var deseti = document.getElementById("deseti");
var stoperica = setInterval(odbrojavaj, 1000);
var vremeZaNovuBoju = setInterval(promeniBoju, 1000);
var vecKliknuo = false;

function promeniBoju(){
	var nasumicnaBoja = boje[Math.round(Math.random()*8)];
	deseti.style.backgroundColor = nasumicnaBoja;
	vecKliknuo = false;
}

function provera(obj){
	if(vecKliknuo) 
		return false;
	
	var bojaKliknutog = obj.style.backgroundColor;
	var bojaDesetog = deseti.style.backgroundColor;
	var rez = parseInt(document.getElementById("rezultat").innerHTML);
	if(bojaKliknutog == bojaDesetog){
		rez += 1;
	}
	else{
		rez -= 2;
	}
	vecKliknuo = true;
	document.getElementById("rezultat").innerHTML = rez;
}

function odbrojavaj(){
	var st = document.getElementById("stoperica");
	var preostaloVremena = parseInt(st.innerHTML);
	if(preostaloVremena == 0){
		document.write("Vreme je isteklo! Vas rezultat je: "+document.getElementById("rezultat").innerHTML);
		clearInterval(stoperica);
		clearInterval(vremeZaNovuBoju);
	}
	else{
		preostaloVremena--;
		st.innerHTML = preostaloVremena;
	}
}