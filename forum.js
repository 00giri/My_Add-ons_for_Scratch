//Add-ons for Discussion Forums

//settings
const SETTINGS = {'reply':true, 'fastLink':true};

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

function fastLink() {
    let elements = Array.from(document.getElementsByClassName('blockpost roweven firstpost'));
    elements.forEach(elm => {
        elm = elm.lastElementChild.firstElementChild;
        let url = elm.lastElementChild.href;
        elm = elm.firstElementChild;
        let newElem = document.createElement('a');
        newElem.href = "javascript:void(0)";
        newElem.title = "fastLink: BBCodeを取得";
        let num = elm.textContent;
        newElem.innerHTML = num;
        let BBCode = `[url=${url}]${num}[/url]`;
        newElem.addEventListener("click", () =>{
            alert(`その投稿へのBBCodeは\n${BBCode}\nです。`);
        });
        elm.innerHTML = "";
        elm.prepend(newElem);
    });
}

if (pathnames[2] == 'topic') {
    if (SETTINGS.reply) reply();
    if (SETTINGS.fastLink) fastLink();
}
