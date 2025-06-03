//Variables

const infoForm = document.querySelector('#infoContainer');
const imageContainer = document.querySelector('#imageContainer');

window.addEventListener('scroll', () =>{
    const rect = infoForm.getBoundingClientRect();
    const rectImage = imageContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom > 0) {
        infoForm.classList.add('animate-fade-in-up');
    }
    else{
        infoForm.classList.remove('animate-fade-in-up');
    }

    const image = imageContainer.children[0].children[0].children[0];
    if( rectImage.top < windowHeight && rectImage.bottom > 0) {
        image.classList.add('dark');
    }
    else{
        image.classList.remove('dark');
    }
})