//Sistema contador de palavras
t = "";
aw= {}; 
w = "";
nc = [" ", ".", "!", "?", ":", ";", "-"];

function wc(){
	t = document.getElementById('text').value;
	//ASCII: 48 ~ 57 = numeros, 65 ~ 90 = LETRAS, 97 ~  122 = letras //"a".charCodeAt();
	for(l=0; l<t.length; l++){
		if(!nc.indexOf(t[l])){
			if(typeof aw[w] !='undefined'){
				aw[w]++;
				w = "";				
			}else{
				aw[w] = 1;
				w = "";				
			}		
		}else{
			w += t[l];			
		}
	}	
	pw(aw);
}

function pw(aw){	
	el = document.getElementById('alert-register');	
	for (var key in aw) {
		let value = aw[key];
		el.innerHTML += key+": "+value+"<br>";		
	}
}

function c(s){	
	console.log(s);
}