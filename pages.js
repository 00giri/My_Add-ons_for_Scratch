//Add-ons for all pages

//settings
const SETTINGS = {'addDiscuss':true};

//page3.0?
let kind = document.getElementById('search-input') ? 2:3;

//What language?
let lang = '';
if (kind-2) {
    lang = document.getElementById('frc-language-1088').value;
} else {
    lang = document.getElementById('language-selection').value;
}

function addDiscuss(kind, lang) {
    let newTxt = (lang=='ja') ? '議論する':(lang=='ja-Hira')? 'ぎろんする':'Discuss';
    if (kind-2) {
        let elements = Array.from(document.getElementsByClassName('link create'));
        let elm = elements[0].firstElementChild;
        elm.href = '/discuss/';
        elm.firstElementChild.innerHTML = newTxt;
    } else {
        let elm = document.getElementById('project-create');
        elm.href = '/discuss/';
        elm.innerHTML = newTxt;
    }
}

if (SETTINGS.addDiscuss) addDiscuss(kind, lang);
