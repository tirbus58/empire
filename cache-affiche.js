let fopen = document.querySelector('#openf');
let fclose = document.querySelector('#fclose');

function afficher(){
	document.querySelector('#form-reserv').style.display = "flex";
}

function fermer(){
	document.querySelector('#form-reserv').style.display = "none"
}

fopen.addEventListener("click",afficher);
fclose.addEventListener("click",fermer);

const sr = ScrollReveal();

sr.reveal('.tir',{
	duration:2000,
	reset:true
});

sr.reveal('.btn-reser',{
	duration:2000,
	reset:true
});

sr.reveal('.img-jomb',{
	duration:2000,
	reset:true
});

sr.reveal('.card',{
	duration:1000,
	delay:1000,
	reset:true
},500);








