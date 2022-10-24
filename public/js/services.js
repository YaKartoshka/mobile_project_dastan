


const dropdowns = document.querySelectorAll('.dropdown')
const dropdownsToArray = Array.apply(null, dropdowns);

dropdownsToArray.forEach(dropdown =>{
    const service_item = dropdown.querySelector('.service_item');
    const caret = dropdown.querySelector('.caret');
    const itemMenu = dropdown.querySelector('.itemMenu');

    service_item.addEventListener('click', ()=>{
        caret.classList.toggle('caret-rotate');
        itemMenu.classList.toggle('itemMenu-open');
    });
 });