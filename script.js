const asideContentEl = document.querySelector('.aside-content');
const overlayEl = document.querySelector('.overlay');
const btnOpenEl = document.querySelector('.btn-open');
const btnCloseEl = document.querySelector('.btn-close');

// FUNCTION TO OPEN AND CLOSE SIDE CONTENT
function  openSideContent () {
    overlayEl.classList.remove('hidden');
    asideContentEl.classList.add('right-nav');  
    asideContentEl.classList.remove('desktop');
    btnCloseEl.style.display = 'inline-block' //classList.remove('hidden');
};
  
function closeSideContent () {
    overlayEl.classList.add('hidden');
    asideContentEl.classList.remove('right-nav');
    //mainContentEl.style.marginLeft = '0rem';
    btnCloseEl.style.display = 'none' //classList.add('hidden');
};

btnOpenEl.addEventListener('click', openSideContent);
btnCloseEl.addEventListener('click', closeSideContent);
overlayEl.addEventListener('click', closeSideContent);
