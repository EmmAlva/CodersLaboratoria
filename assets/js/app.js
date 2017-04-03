var coder = document.getElementById("coder-list");
var photo = document.getElementsByClassName("photo");
var chile = document.getElementById("4-chile");
var lima5 = document.getElementById("5-lima");
var lima6 = document.getElementById("6-lima");
var select = document.getElementById("select");

var div = document.createElement("div");
	div.setAttribute("id","restante");
	div.style.display='none';
var t = document.createTextNode("En construcción");
	div.appendChild(t),
	// constru = coder.appendChild(div);
	coder.appendChild(div);

	// function seleccion(option){
	// 	option.value.style.display = "block";

	// }
	// seleccion(select);

select.addEventListener("change", function(){
	if(select.value == "4-chile"){
		lima6.style.display= "none";
		lima5.style.display = "none";
		chile.style.display = "block";
		div.style.display = "none";		
	}
	else if(select.value == "5-lima"){
		lima6.style.display= "none";
		lima5.style.display = "block";
		chile.style.display = "none";
		div.style.display = "none";		
	}
	else if(select.value == "6-lima"){
		lima6.style.display= "block";
		lima5.style.display = "none";
		chile.style.display = "none";
		div.style.display = "none";		
	}
	else{
		lima6.style.display= "none";
		lima5.style.display = "none";
		chile.style.display = "none";
		// constru.style.display = "block";
		div.style.display='block';
	}
})