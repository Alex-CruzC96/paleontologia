//Clase que llama a todos los elementos que se van a animar
const animateElementsFirst = document.querySelectorAll('.animation-first');
const animateElementsSecond = document.querySelectorAll('.animation-second');

window.addEventListener('scroll',()=>{
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    animateElementsFirst.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('animate-fade-in-up');
        } else {
            element.classList.remove('animate-fade-in-up');
        }
    })

    animateElementsSecond.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    })
})
