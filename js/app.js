let textoA ='comision-20025';
let textoB = 'Nelson-Andrada';

console.log('Mi clase es :  ' + textoA + '  y mi nombre es:   ' + textoB);

// selectores
const titulo = document.getElementById('titulo')
//const titulo = document.getElementsByClassName('titulo')[0]
 console.log(titulo)

//titulo.innerText = "Desafio de clase nueve"
titulo.innerHTML = "<strong>Desafio de clase nueve</strong>"

//titulo.className = "font-big"
titulo.classList.add('font-big', 'font-small')
titulo.classList.remove('font-small')

// const contenedorTexto = document.getElementById('texto')
// //console.log(contenedorTexto)
// //const fecha = "18/01/2022"
// const fecha = new Date ()
// contenedorTexto.innerHTML =`
// <h2> Hoy es ${fecha.toLocaleDateString()}.</h2>
// <br> <strong>"Hola,¿cómo estas?"</strong>
// <br>${22 * 2 -10} 

// `
const contenedorProductos = document.getElementById('contenedor_productos')

// const producto1 = {id: 1,
//      nombre: "Frutillas",
//      desc: "Una fruta", 
//      precio: 400,
//       img:'../img/frutillas.png'
// }

stockProductos.forEach((producto) => {
const article = document.createElement('article')
article.classList.add('shadow','card', 'col-3', 'm-2')
article.id = `${producto.id}`
article.innerHTML =`
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.desc}</p>
        <p class="card-text font-small"> Precio : $ ${producto.precio}</p>
        <a href="#" class="btn btn-info $teal-400">Cargar al carrito</a>
        </div>
    `
// console.log(article)
    contenedorProductos.appendChild(article)

})

var btn = document.getElementById('btn'),
    caja = document.getElementById('caja'),
    contador = 0;
    
    function cambio()
    { if(contador==0)
        {
            caja.classList.add('azul');
            contador=1;
        }
        else{
            caja.classList.remove('azul');
            contador=0;}
    }

    btn.addEventListener('click',cambio,true)




  










//  console.log(contenedorProductos)
