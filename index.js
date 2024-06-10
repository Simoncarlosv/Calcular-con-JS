precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


cantidad=document.querySelector('.cantidad')
contador=Number(cantidad.innerHTML)
contador=contador-1
cantidad.innerHTML=contador
precio=document.querySelector('.precio-inicial').innerHTML
total=document.querySelector('.valor-total')
total.innerHTML=precio*contador;
//calculoPrecio = Number(precioSpan)
//cantidadFinal = document.querySelector(".cantidad");
//calculoCantidad = Number(cantidadFinal)
//calculoFinal = document.querySelector(".valor-total")
//calculoFinal = calculoPrecio*calculoCantidad
//calculoFinal.innerHTML=calculoFinal;


//cantidad = document.querySelector('.cantidad');
//calculoCantidad = Number(cantidad.innerHTML);
//preciofinal = document.querySelector('.valor-total');
//calculoPrecio = Number(preciofinal.innerHTML);
//calculo = calculoPrecio*calculoCantidad
//preciofinal.innerHTML=calculo


//preciofinal = precio * cantidad
//valortotalSpan.innerHTML=preciofinal


