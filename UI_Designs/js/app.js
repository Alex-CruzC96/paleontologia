//Variables

const infoForm = document.querySelector('#infoContainer');
const glaciacionInfo = document.querySelector('#glaciacionesContainer');

window.addEventListener('scroll', () =>{
    const rect = infoForm.getBoundingClientRect();
    const rectGlaciacion = glaciacionInfo.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom > 0) {
        infoForm.classList.add('animate-fade-in-up');
    }
    else{
        infoForm.classList.remove('animate-fade-in-up');
    }

    if (rectGlaciacion.top < windowHeight && rectGlaciacion.bottom > 0) {
        glaciacionInfo.classList.add('dark');
    }
    else{
        glaciacionInfo.classList.remove('dark');
    }
})