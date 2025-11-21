
// script.js - Carrito simple y formulario de checkout
let cart = [];
function agregar(name, price){
  cart.push({name, price});
  renderCart();
}
function renderCart(){
  const el = document.getElementById('carrito-items');
  if(!el) return;
  el.innerHTML = '';
  let total = 0;
  cart.forEach((it, idx)=>{
    const p = document.createElement('p');
    p.textContent = it.name + ' - $' + it.price;
    el.appendChild(p);
    total += it.price;
  });
  const totalEl = document.getElementById('total');
  if(totalEl) totalEl.textContent = total;
}
// Toggle side cart on tienda.html
document.addEventListener('click', function(e){
  if(e.target && e.target.id==='abrirCarrito'){
    const cartEl = document.getElementById('carrito');
    if(cartEl) cartEl.classList.toggle('open');
  }
});
// Checkout form handler (simulado)
document.addEventListener('submit', function(e){
  if(e.target && e.target.id==='checkout-form'){
    e.preventDefault();
    alert('Pedido enviado. (Simulado para presentación)');
    cart = [];
    renderCart();
  }
});
