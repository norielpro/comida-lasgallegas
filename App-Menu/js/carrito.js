


if(!localStorage.getItem("dataBro2")){
localStorage.setItem('dataBro2','nombre')
}

let productoArray=[]
  const CrearCarrito = (producto, cantidad,precio)=>{
    let item= {
        producto:producto,
        cantidad:cantidad,
        precio:precio
      
    }
    productoArray.push(item);
    return item;
    
    }
const GuardarDB = ()=>{
    localStorage.setItem('productosPanes', JSON.stringify(productoArray))
    Toastify({
      text: "Producto Añadido ",
      duration: 3000,
      gravity: "bottom",
      position: "center",
      style: {
        background: "#2F71D6",
      },
      }).showToast();
   // cCompras()
    }

function cComprasPanes(){
        const prod = JSON.parse(localStorage.getItem("productosPanes"))
        let cantidadPro = document.getElementById("quote")
        cantidadPro.innerText= prod.length
      }

 //hasta aqui
 function anadirCarrito(){
    const productoscarrito=JSON.parse (localStorage.getItem("productos"))
    var contenido=''
    productoscarrito.forEach(function(p){
      contenido += `
         <li><b>${p.nombre}</b> ${p.precio}</li>
             `
    })
    //console.log(contenido)
   document.getElementById("mostrarPro").innerText= contenido
    
  }
  //muestra el carrito
  /*async function mostrarCarrito(){
   
    const productoscarrito=JSON.parse (localStorage.getItem("productosPanes"))
    var contenido=''
    var textoW= ''
    productoscarrito.forEach(function(p){
      contenido += `<li id="mr"><b id='mr'>${p.producto}:</b> <b>${p.cantidad}--</b> <b id="mr">$ ${p.precio} CUP</b></li>`
      textoW += `${p.producto} ${p.cantidad} ${p.precio} `
    })
    const prod = JSON.parse(localStorage.getItem("productosPanes"))
   const precios= prod.map(objeto => Number(objeto.precio))
   const pTotal = precios.reduce((total, valorActual) => total + valorActual, 0);
   const cliente= JSON.parse(localStorage.getItem("dataBro"))
   //const email ='iglesiahatillo57@gmail.com'
   const numTel= '+5353044022'
   cant= prod.length
    await Swal.fire({
      text: 'Productos comprados',
      imageUrl:'assets/carrito.png',
      imageWidth: 100,
      imageHeight: 100,
      html: `
      
      <div class= "center">
      <ul id="mostrarPro">${contenido}</ul>
      </div> 
      <hr id="hr">
      <div class= "center">
      <p class="txt"><b>Cliente:</b> ${cliente.nombre}</p>
      <p class="txt"><b>Tel:</b> <b> ${cliente.telefono}</b></p>
      <p class="txt"><b>Direccion:</b> <b> ${cliente.direccion}</b></p>
      <p class="txt">TOTAL A PAGAR: <b> $ ${pTotal} CUP</b></p>
      </div>
      <div id="centro">
      <div id="centrado">
     
      <a class="ui-btn" id="wa" href="https://api.whatsapp.com/send?phone=${numTel}&text=*Pedido:*%0A + ${textoW}%0A+*Total a Pagar*%0A+ ${pTotal} +*Nombre del Cliente*%0A +${cliente.nombre}+*Telef.*%0A + ${cliente.telefono}+*Direccion*%0A + ${cliente.direccion}+ *Fecha del Ticket de compra*%0A + ${fechaCarrito}" target="_blank">Procesar x Whatsapp <i class="icofont-whatsapp"> </i></a>
       <a class="ui-btn"  onClick="smsBorrar()">Vaciar carrito <i class="icofont-cart"> </i></a>
  
      </div>
         </div>
   
      `,
      position: 'top-end',
      showClass: {
        popup: `
        animate__animated
        animate__fadeInRight
        animate__faster
      `,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutRight
        animate__faster
      `,
      },
      grow: 'column',
      width: 600,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }*/
   
  
  function recordarCarrito(){
    cComprasPanes()
    const prod = JSON.parse(localStorage.getItem("productosPanes"))
    const dato = JSON.parse(localStorage.getItem("dataBro"))
    const detalle=`${dato.nombre} tienes una compra pendiente en tu carrito.`
    cant= prod.length
   
    if(cant > 0){
    Swal.fire({
      title:'Productos del carrito',
      text:detalle,
      icon: 'info',
      timerProgressBar: true,
      background: '#ECC537'
    })
  
    }
    
   
  }
  function vaciarCarrito(){
   localStorage.removeItem('productosPanes')
   productoArray = []
   document.getElementById("quote").innerHTML = "0" 
   document.getElementById("orden").innerHTML ='Sin productos'   
   document.getElementById("reciboFactura").style.display= 'none'
   localStorage.setItem("facturasPendientes", '')
   Swal.close()
  }
  function smsBorrar(){
    Swal.fire({
      title: "¿Deseas vaciar el carrito ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`
    }).then((result) => {
   
      if (result.isConfirmed) {
    document.getElementById("elCarrito").innerHTML = "Sin orden a procesar"    
    vaciarCarrito()
     Swal.fire({
      text:'Puede seguir comprando en nuestra tienda',
      title:'Carrito limpio',
      showConfirmButton: true,
      allowOutsideClick: true
      });
      } else if (result.isDenied) {
        Swal.fire("El Carrito mantiene sus productos ","", "warning");
        mostrarCarrito()
        
      }
    });
  }
function nohay(){
  Toastify({
    text: "No hay productos seleccionados",
    duration: 3000,
    gravity: "top",
    position: "center",
    style: {
      background: "#ECC537",
    },
    }).showToast();
}

 function verificarExistencia(){
  if(document.getElementById("nP").textContent ==  "Productos"){
   nohay()
    }else{
  
    guardarP()
  }
 }   
function guardarP(){
  let producto= document.getElementById("nP").textContent
   let precio= Number (document.getElementById("precio").textContent)
   let cantidad= Number (document.getElementById("cantidadP").textContent)
   let preciofinal = precio * cantidad 
   //console.log (producto, precio)
   CrearCarrito(producto,cantidad, preciofinal)
   GuardarDB()
   cComprasPanes()
   document.getElementById("cantidadP").innerHTML = "1"

}  


function menos(){
    let menos = document.getElementById("menos")
    let cantidadP = Number(document.getElementById("cantidadP").textContent)
    if(cantidadP > 1){
        cantidadP --
        document.getElementById("cantidadP").innerHTML = cantidadP
    }     
    

}
function mas(){
    let mas = document.getElementById("mas")
    let cantidadP = Number(document.getElementById("cantidadP").textContent)
      
    if(cantidadP > 0  ){
    cantidadP ++
    document.getElementById("cantidadP").innerHTML = cantidadP
    }    
   // console.log(cantidadP)

}
function isOnline() {
  return navigator.onLine;
}
function recordarDatos(){
  if(isOnline()){
   verdatos()
  } else {
     Swal.fire({
      icon:"warning",
      text:'Recuerda que para ver el menú actualizado debes estar conectado a internet',
      title:'No tienes conexión',
      showConfirmButton: false,
      allowOutsideClick: false
      });
  }
 
}
setTimeout(verdatos, 1000)

function verdatos(){
 const datos=  localStorage.getItem('dataBro2')
 const detalle = `Bienvenido`
 const data = datos

 if (data === 'nombre' ){
  Swal.fire({
    icon:'warning',
    text:'Recuerda debes rellenar tus datos personales para hacer efectiva la compra',
    title:detalle,
      });
 }
 if (data === 'listo' ){
  const datosQ= JSON.parse(localStorage.getItem('dataBro'))
  const dataCliente = `Bienvenido ${datosQ.nombre}`
  const check = document.getElementById('check')
 
  Swal.fire({
    icon:'info',
    text:'Disfruta de nuestra comida',
    title:dataCliente,
      });
 }
 }

 document.addEventListener('DOMContentLoaded', function() {
  // Tu código aquí se ejecutará una vez que el DOM esté completamente cargado
 // document.getElementById('lafecha').innerText = moment().format('lll')
  console.log('El DOM ha sido completamente cargado y analizado.');
  
  // Puedes llamar a otras funciones o inicializar tu aplicación aquí
//recordarCarrito();

});
//setInterval(fecha, 60000)
function fecha(){
const fechaactual= moment().format('lll')
//document.getElementById('lafecha').innerText = fechaactual
}

const fechaCarrito= moment().format('lll')





function costosEnvios(){ 
 let html= ''
 const datos = JSON.parse(localStorage.getItem("datosIniciales")) 
datos.forEach(datos => {
    datos.precioenvios.forEach(precioenvio =>{
html +=`
 <p><b>${precioenvio.lugar}</b> <span>${precioenvio.precio}</span> </p>
`
 Swal.fire({
    title: "Costo del envío",
    html: html,
    imageUrl: "assets/domicilio.webp",
    imageAlt: "envio"
  });
})
 })

 
}

 