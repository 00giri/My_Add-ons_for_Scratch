//Add-ons for Discussion Forums

//settings
const SETTINGS = {'reply':true};

let pathnames = location.pathname;
pathnames = pathnames.split("/");

function reply() {
    let elements = Array.from(document.getElementsByClassName('postfootright'));
    elements.forEach(elm => {
        let newElem = document.createElement('li');
        newElem.innerHTML = ' | <a href="#reply">Reply</a>';
        newElem.addEventListener('click', () => {
            let getElem = elm.parentElement.previousElementSibling;
            let num = getElem.firstElementChild.textContent;
            let url = getElem.lastElementChild.href;
            let kai = ''
            if (document.getElementById('id_body').value != '') kai = '\n\n';
            document.getElementById('id_body').value += `${kai}>> [url=${url}]${num}[/url]\n`;
        });
        elm.firstElementChild.appendChild(newElem);
    });
}

if (SETTINGS.reply) {
    reply()
}
