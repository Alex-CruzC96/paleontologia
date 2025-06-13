//Clase que llama a todos los elementos que se van a animar
const animateElementsFirst = document.querySelectorAll('.animation-first');
const animateElementsSecond = document.querySelectorAll('.animation-second');
//Variables del menú móvil
const burbuja = document.querySelector('#burbuja-movil');
const mobilMenu = document.querySelector('#mobil-menu')
//Variable que contiene todos los contenedores
const containers = document.querySelectorAll('.container,.container-fluid');

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

//Evento para desplegar el menú móvil
burbuja.addEventListener('click',() => {
    burbuja.classList.toggle('desplegado');
    mobilMenu.classList.toggle('desplegado');
    containers.forEach((el) => {
        el.classList.toggle('blur-container');
    })
});
