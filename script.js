/* Obtener los iconos y la galería */

const gridViewIcon = document.getElementById('grid-view');
const individualViewIcon = document.getElementById('individual-view');
const gallery = document.getElementById('gallery');

/* Función para activar la vista de grid */

gridViewIcon.addEventListener('click', () => {
    gallery.classList.remove('individual-view');
    gallery.classList.add('row');
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.add('col-4');
        item.classList.remove('col-12', 'd-flex', 'flex-column', 'align-items-center');
        item.querySelectorAll('.info').forEach(info => info.style.display = 'none');
    });
});

/* Función para activar la vista individual */

individualViewIcon.addEventListener('click', () => {
    gallery.classList.remove('row');
    gallery.classList.add('individual-view');
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.remove('col-4');
        item.classList.add('col-12', 'd-flex', 'flex-column', 'align-items-center');
        item.querySelectorAll('.info').forEach(info => info.style.display = 'block'); 
    });
});