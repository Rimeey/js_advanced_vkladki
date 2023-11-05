'use strict'
const tabs = document.querySelector('#tabs');
const all_li = tabs.querySelectorAll('li');
const all_div = tabs.querySelectorAll('div');

all_div.forEach(element => element.classList.add('hide_tabs'));
all_div[0].classList.remove('hide_tabs');
all_li[0].classList.add('active_white');

all_li.forEach(e => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        all_li.forEach(element => element.classList.remove('active_white'));
        e.target.parentNode.classList.add('active_white');

        let href = e.target.getAttribute('href');
        all_div.forEach(element => element.classList.add('hide_tabs'));
        tabs.querySelector(href).classList.remove('hide_tabs');
    })
});
