/**
 * Completer cette fonction 
 * 
 */
function validate() {

}









/******************************************************
 * LE CODE CI-DESSOUS FAIT FONCTIONNER LA PAGE TU PEUX
 * LE MODIFIER POUR COMPRENDRE COMMENT IL FONCTIONNE
 * MAIS ATTENTION DE NE PAS L'EFFACER...
 ******************************************************
 */

const BTN_SUBMIT = document.querySelector('button');
const FORM = document.querySelector('form');
const INPUT_START = document.querySelector('#startRdv');
const INPUT_END = document.querySelector('#endRdv');
const ERROR_MSG = document.querySelector('#error');
const listElement = [INPUT_START, INPUT_END];

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e);
    for (const element of listElement) {
        cleanClassList(element);
        if(validate(element) === undefined) {
            ERROR_MSG.classList.remove('invisible');
        } else {
            ERROR_MSG.classList.add('invisible');
        }
        
        if(validate(element)) {
            
            element.classList.add('is-valid')
        } else {
            element.classList.add('is-invalid')
        }
    }
})

function cleanClassList(htmlElement) {
    if(htmlElement.classList.contains('is-valid')) {
        htmlElement.classList.remove('is-valid')
    }
    if(htmlElement.classList.contains('is-invalid')) {
        htmlElement.classList.remove('is-invalid')
    }
}