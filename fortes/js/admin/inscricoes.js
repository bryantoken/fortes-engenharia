function callFilter() {
	 const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            buttonActive(event.target.id);
        });
    });


}

function buttonActive(buttonId) {
	switch (buttonId){
	case 'element1':
		styleClear(buttonId);
		styleChange(buttonId);
		break;
	case 'element2':
		styleClear(buttonId);
		styleChange(buttonId);
		break;
	case 'element3':
		styleClear(buttonId);
		styleChange(buttonId);
		break;
	}
}

function styleChange(tipo){
	let element = document.getElementById(tipo);
	 if(element.classList.contains('default')){
	 	element.classList.remove('default');
	 	element.classList.add('filter-active');
	 }
}

function styleClear(tipo){
	const buttons = document.querySelectorAll('button');
	let element = document.getElementById(tipo);
		 
    buttons.forEach(button => {
        button.classList.remove('filter-active');
	 	element.classList.add('filter-active');
    });

}
// ==========================================================
// CATEGORIA 2

function callFilter2() {
	 const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            buttonActive2(event.target.id);
        });
    });


}

function buttonActive2(buttonId) {
	switch (buttonId){
	case '2-element1':
		styleClear2(buttonId);
		styleChange2(buttonId);
		break;
	case '2-element2':
		styleClear2(buttonId);
		styleChange2(buttonId);
		break;
}
}
function styleChange2(tipo){
	let element = document.getElementById(tipo);
	 if(element.classList.contains('default')){
	 	element.classList.remove('default');
	 	element.classList.add('filter-active');
	 }
}

function styleClear2(tipo){
	const buttons = document.querySelectorAll('button');
	let element = document.getElementById(tipo);
		 
    buttons.forEach(button => {
        button.classList.remove('filter-active');
	 	element.classList.add('filter-active');
    });

}