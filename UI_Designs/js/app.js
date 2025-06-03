//Variables

const infoForm = document.querySelector('#infoContainer');
const glaciacionInfo = document.querySelector('#glaciacionesContainer');
const capibaraContainer = document.querySelector('#capibaraContainer');

window.addEventListener('scroll', () =>{
    const rect = infoForm.getBoundingClientRect();
    const rectGlaciacion = glaciacionInfo.getBoundingClientRect();
    const rectCapibara = capibaraContainer.getBoundingClientRect();
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

    if (rectCapibara.top < windowHeight && rectCapibara.bottom > 0) {
        capibaraContainer.classList.add('animate-fade-in-up');
    }
    else{
        capibaraContainer.classList.remove('animate-fade-in-up');
    }
})