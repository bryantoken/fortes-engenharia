


const element1 = document.getElementById('element1');
element1.classList.add('filter-active');
function buttonActive(buttonId) {
	let element2 = document.getElementById('element2');
	let element3 = document.getElementById('element3');
	switch (buttonId){
	case 'element1':
		element2.classList.remove('filter-active');
		element3.classList.remove('filter-active');
		element2.classList.add('default');
		element3.classList.add('default');
		element1.classList.add('filter-active');
		break;
	case 'element2':
		element1.classList.remove('filter-active');
		element3.classList.remove('filter-active');
		element1.classList.add('default');
		element3.classList.add('default');
		element2.classList.add('filter-active');

		break;
	case 'element3':
		element1.classList.remove('filter-active');
		element2.classList.remove('filter-active');
		element1.classList.add('default');
		element2.classList.add('default');
		element3.classList.add('filter-active');
		break;
	}
}

// ==========================================================
// CATEGORIA 2

const element4 = document.getElementById('element4');
const conteudo1 = document.getElementById('conteudo#1');
const conteudo2 = document.getElementById('conteudo#2');

conteudo1.classList.add('conteudo-active');

element4.classList.add('filter-active');
function buttonActive2(buttonId) {
	let element5 = document.getElementById('element5');

	switch (buttonId){
	case 'element4':
		element5.classList.remove('filter-active');
		element5.classList.add('default');
		element4.classList.add('filter-active');

		conteudo2.classList.remove('conteudo-active');
		conteudo2.classList.add('conteudo-default');
		conteudo1.classList.add('conteudo-active');

		break;
	case 'element5':
		element4.classList.remove('filter-active');
		element4.classList.add('default');
		element5.classList.add('filter-active');

		conteudo1.classList.remove('conteudo-active');
		conteudo1.classList.add('conteudo-default');
		conteudo2.classList.add('conteudo-active');

		break;
	}
}

// ============================================================
// LISTA DE SOLICITACOES



function listActive(tipo) {
	let element = document.getElementById(tipo);
	let checkbox = document.getElementById(tipo+'-check');
	if(checkbox.checked) {
	element.classList.add("list-active");
	} else {
	element.classList.remove("list-active");
	}

}
function openMail(tipo) {
if (window.innerWidth < 1250) {
showPopup();
}
let valor = document.getElementById(tipo).value;
const mail = document.getElementById('mail#'+valor);
const allMails = document.querySelectorAll('[id^="mail#"]');
    allMails.forEach(mail => {
        mail.classList.remove('mail-active');
    });
 mail.classList.add('mail-active');
}

// ===========================================================
// LISTA DE SOLICITACOES CADASTRO
function listActive2(tipo) {
	let element = document.getElementById(tipo+'#2');
	let checkbox = document.getElementById(tipo+'-check#2');
	if(checkbox.checked) {
	element.classList.add("list-active");
	} else {
	element.classList.remove("list-active");
	}

}
function openMail2(tipo) {
if (window.innerWidth < 1250) {
showPopup2();
}
let valor = document.getElementById(tipo).value;
const mail = document.getElementById('mail2#'+valor);
const allMails = document.querySelectorAll('[id^="mail2#"]');
    allMails.forEach(mail => {
        mail.classList.remove('mail-active');
    });
 mail.classList.add('mail-active');
}

// ===============================================
// ABRIR POPUP DE CONTEUDO
function showPopup() {
    var testeContent = document.querySelector('.conteudo-container-right').innerHTML;
     document.getElementById('popupContent').innerHTML = testeContent;
    document.querySelector('.popup').style.display = 'block';
}

function showPopup2() {
    var testeContent = document.querySelector('.cont-2').innerHTML;
     document.getElementById('popupContent').innerHTML = testeContent;

    document.querySelector('.popup').style.display = 'block';
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
}

