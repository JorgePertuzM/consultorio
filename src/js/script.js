// Añadir animaciones al hacer scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 150) {
            element.classList.add('animate__fadeIn');
        }
    });
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});


// Codigo JS para SLIDE de VISION, VISION y VALORES
// Funciones para controlar el slider
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentSlide = 0;

// Mostrar la slide actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    // Actualizar los textos de los botones según el slide actual
    updateButtonLabels();
}

// Actualizar los textos de los botones
function updateButtonLabels() {
    const slideTitles = [
        "Nuestra Misión",   // Slide 1
        "Nuestra Visión",   // Slide 2
        "Nuestros Valores"   // Slide 3
    ];

    // Asignar los textos dinámicamente a los botones
    prevButton.textContent = slideTitles[(currentSlide - 1 + slides.length) % slides.length]; // Slide anterior
    nextButton.textContent = slideTitles[(currentSlide + 1) % slides.length]; // Slide siguiente
}

// Navegar a la siguiente slide
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Navegar a la slide anterior
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Mostrar la primera slide al cargar la página
showSlide(currentSlide);

// Función para animar los elementos al hacer scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 150) {
            element.classList.add('animate__fadeIn');
        }
    });
});

// Cambio automático del slider cada 20 segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 15000); // 15000 ms = 15 segundos



// Codigo JS para agendar CITA
// Abrir el modal al hacer clic en el botón "Agendar Cita"
document.getElementById('agendar').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    var myModal = new bootstrap.Modal(document.getElementById('agendaModal'), {});
    myModal.show();
});

// Manejo del formulario de agendamiento
document.getElementById('formAgenda').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores ingresados en el formulario
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;

    // Validar si los campos están completos
    if (fecha && hora && nombre && correo && telefono) {
        alert(`Cita agendada para el ${fecha} a las ${hora}. \nNombre: ${nombre} \nCorreo: ${correo} \nTeléfono: ${telefono}`);
        // Cerrar el modal
        var myModal = bootstrap.Modal.getInstance(document.getElementById('agendaModal'));
        myModal.hide();
    } else {
        alert('Por favor completa todos los campos.');
    }
});

