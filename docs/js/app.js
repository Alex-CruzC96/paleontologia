//Clase que llama a todos los elementos que se van a animar
const animateElementsFirst = document.querySelectorAll('.animation-first');
const animateElementsSecond = document.querySelectorAll('.animation-second');
//Variables del menú móvil
const burbuja = document.querySelector('#burbuja-movil');
const mobilMenu = document.querySelector('#mobil-menu')
//Variable que contiene todos los contenedores
const containers = document.querySelectorAll('.container,.container-fluid');
//Variable que contiene todas las imágenes que se podrán visualizar en pantalla grande
const images = document.querySelectorAll('.prev-image');
//Variable que contene al modal que se va desplegar
const modal = document.querySelector('#big-screen');
//Variable cambiante que ayuda al modal
let isActive = false;

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
    //Despliegue y repliegue del menú
    burbuja.classList.toggle('desplegado');
    mobilMenu.classList.toggle('desplegado');
    
    //Bloquea el scroll hasta que el menú se oculte
    document.body.style.overflow = mobilMenu.classList.contains('desplegado') ? 'hidden' : '';
    
    //Desenfoque de todos los contenedores
    blurAllContainers();
});

//Evento de las imágenes que activan el modal de previsualización
images.forEach((image) =>{
    image.addEventListener('click',() =>{
        if(!isActive){
            //Indicarle al modal la imagen
            modal.src = image.src;

            //Activar el modal
            modal.classList.toggle('showed');
            
            //Desenfocar los contenedores
            blurAllContainers();
            
            //Oscurece los contenedores
            darkContainers();
            
            //Bloquea el scroll hasta que el modal se oculte
            blockScroll();
            
            //Activa la condición para cerrar el modal
            activate();
        }
    });
});

//Evento de click fuera del menú para ocultarlo
document.addEventListener('click',(event) =>{
    if(!mobilMenu.contains(event.target) && !burbuja.contains(event.target) && mobilMenu.classList.contains('desplegado')){
        //Despliegue y repliegue del menú
        burbuja.classList.toggle('desplegado');
        mobilMenu.classList.toggle('desplegado');

        //Desenfoque de todos los contenedores
        blurAllContainers();
        //Se bloquea el scroll hasta que el menú se oculte
        document.body.style.overflow = mobilMenu.classList.contains('desplegado') ? 'hidden' : '';
    }
    else if(modal.classList.contains('showed') && !modal.contains(event.target) && isActive){
        //Desactivar el modal
        modal.classList.toggle('showed');

        //Desenfoque de todos los contenedores
        blurAllContainers();

        //Aclara los contenedores
        darkContainers();

        //Desactiva el bloqueo del scroll
        unblockScroll();

        //Desactiva la función para cerrar el modal
        activate();
    }
});


//Métodos
const blurAllContainers = () => {
    containers.forEach((cont) =>{
        cont.classList.toggle('blur-container');
    });
}

const darkContainers = () =>{
    document.body.classList.toggle('darkest-container');
}

const activate = () =>{
    setTimeout(() =>{
        isActive = !isActive;
    },500);
}

const blockScroll = () =>{
    document.body.style.overflow = 'hidden';
}
const unblockScroll = () =>{
    document.body.style.overflow = '';
}
