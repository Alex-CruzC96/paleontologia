//Variables

const infoForm = document.querySelector('#infoContainer');

window.addEventListener('scroll', () =>{
    const rect = infoForm.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom > 0) {
        infoForm.classList.add('animate-fade-in-up');
    }
    else{
        infoForm.classList.remove('animate-fade-in-up');
    }
})