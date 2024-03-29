const abtBtn = document.getElementById('aboutBtn');
const projectBtn = document.getElementById('projectBtn');
const contactBtn = document.getElementById('contactBtn')
const abt = document.getElementById('about');
const proj = document.getElementById('projects');
const cont = document.getElementById('contact');
const loading = document.getElementById('loaderContainer')

function hide(...el) {
    for (element of el) {
        element.setAttribute('style', 'display:none')
    }
}

function show(el) {
    el.removeAttribute('style')
}

function transition(el, temp, ...oth) {
    show(temp)
    hide(el)
    hide(...oth)
    setTimeout(() => {
        hide(temp);
        show(el);
        hide(...oth)
    }, 1500)
}

abtBtn.addEventListener('click', function(){
    transition(abt, loading, proj, cont)
});
projectBtn.addEventListener('click', function () {
    transition(proj, loading, abt, cont)
});
contactBtn.addEventListener('click', function () {
    transition(cont, loading, abt, proj)
});
