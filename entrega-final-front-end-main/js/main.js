(function(){
  const track = document.getElementById('track');
  const slides = Array.from(track.children);
  const thumbnails = Array.from(document.querySelectorAll('.thumb'));
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;
  const total = slides.length;

  function update() {

    track.style.transform = `translateX(-${index * 100}%)`;


    thumbnails.forEach(t => t.classList.remove('active'));
    const activeThumb = thumbnails.find(t => Number(t.dataset.index) === index);
    if(activeThumb) activeThumb.classList.add('active');


    prev.style.opacity = index === 0 ? '0.45' : '1';
    next.style.opacity = index === total -1 ? '0.45' : '1';
  }


  thumbnails.forEach(t => {
    t.addEventListener('click', () => {
      index = Number(t.dataset.index);
      update();
    });
  });


  prev.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    update();
  });
  next.addEventListener('click', () => {
    index = Math.min(total - 1, index + 1);
    update();
  });


  let startX = 0, dist = 0;
  const viewer = document.getElementById('viewer');
  viewer.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, {passive:true});
  viewer.addEventListener('touchmove', e => {
    if(!startX) return;
    dist = e.touches[0].clientX - startX;
  }, {passive:true});
  viewer.addEventListener('touchend', () => {
    if(Math.abs(dist) > 40){
      if(dist < 0) index = Math.min(total - 1, index + 1);
      else index = Math.max(0, index - 1);
      update();
    }
    startX = 0; dist = 0;
  });


  window.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') { index = Math.max(0, index - 1); update(); }
    if(e.key === 'ArrowRight'){ index = Math.min(total - 1, index + 1); update(); }
  });


  slides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('load', () => {
    });
  });

  update();

  

})();


/////////////////////////////////////////////////////////////////////




let carrito = [];


document.addEventListener("click", function (e) {

  const boton = e.target.closest(".btn");
  if (!boton) return;


  if (!boton.textContent.toLowerCase().includes("agregar carrito")) return;


  const card = boton.closest(".cajas-productos, .product-info");
  if (!card) return;


  const nombreElem =
    card.querySelector(".descripcion") ||
    card.querySelector("h2");

  const nombre = nombreElem ? nombreElem.textContent.trim() : "Producto";


  const precioSpan = card.querySelector(".precio span, .precio");
  const precioTexto = precioSpan ? precioSpan.textContent : "$0";

  const precio = parseInt(
    precioTexto.replace("$", "").replace(/\./g, "")
  );


  let cantidad = 1;
  const qtyInput = document.getElementById("qty");
  if (qtyInput) {
    cantidad = parseInt(qtyInput.value);
  }


  const producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
  };

  carrito.push(producto);


  const total = precio * cantidad;

  alert(
    "Producto agregado al carrito\n\n" +
    "Producto: " + nombre + "\n" +
    "Cantidad: " + cantidad + "\n" +
    "Precio unitario: $" + precio + "\n" +
    "Total: $" + total
  );

  console.log("Carrito:", carrito);
});


