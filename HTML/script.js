const name = document.getElementById('username');
const form = document.getElementById('form');
const errorMsg = document.getElementById('errorPrint');
const mNumber = document.getElementById('mobileNumber');




form.addEventListener('submit', e => {
	let msg =[];
	
	
	const nameCheck = /^[a-z A-Z]+$/;
	if(!nameCheck.test(name.value)){
		msg.push('Please enter only valid name, no symbols or numbers');
	}
	
	if(msg.length > 0){
		e.preventDefault();
		errorMsg.innerText = msg.join(', ');
	}
	
	


});



