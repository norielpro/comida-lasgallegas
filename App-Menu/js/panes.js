fetch('server.json')
.then(function(res){
  document.getElementById("load").style.display= "flex"
  if(!res.ok){
    throw new error(console.log('Hubo un error'+ res.statusText));
    //alert("Hubo un problema al cargar los datos")
  }else{
    if(res.ok){
document.getElementById("load").style.display = 'none' 
return res.json();
}
  }

})
.catch(error=>{ console.error('Error'+ error)})
 
.then(function(data){

localStorage.setItem("datosIniciales", JSON.stringify(data))

})
.finally(()=>{
   document.getElementById("load").style.display = 'none' 
  pizzas()
  entrantes()
})
 


//plato de entrantes
function pizzas(){

  let html= ''
 const datos = JSON.parse(localStorage.getItem("datosIniciales")) 
 datos.forEach(datos =>{
   //console.log(datos.telefono)
   localStorage.setItem("link", datos.link)
   localStorage.setItem("numTel", datos.tel)
   localStorage.setItem("versionApp", datos.version)
   localStorage.setItem("nuevaversion", datos.nuevaversion)
   datos.menu.forEach(menu =>{
   //console.log(menu.id)
   html +=`
 <li class="ui" onClick="document.getElementById('popup').style.display='flex',document.getElementById('nP').innerHTML='${menu.producto}',document.getElementById('dP').innerHTML='${menu.descripcion}', document.getElementById('precio').innerHTML='${menu.precio}'" >
  <div>
  <img src=${menu.img} width="80px" id='imgP' alt=${menu.producto}>
  </div>
   <div id="nombrePrecio">
  <h4 id='nProducto'>${menu.producto}</h4>
  <h4 id="nPa">$ ${menu.precio} cup</h4> 
   </div>
   </li>
  <hr>
 `
 document.getElementById('mostrarPizza').innerHTML= html
 })
 })
 }
 
//plato de entrantes fin

//plato de extras inicio
 function entrantes(){

  let html= ''
 const datos = JSON.parse(localStorage.getItem("datosIniciales")) 
 datos.forEach(datos =>{
   //console.log(datos.telefono)
 localStorage.setItem("numTel", datos.tel)

   datos.extras.forEach(extras =>{
   //console.log(menu.id)
   html +=`
<li class="ui" onClick="document.getElementById('popup').style.display='flex',document.getElementById('nP').innerHTML='${extras.producto}',document.getElementById('dP').innerHTML='${extras.descripcion}', document.getElementById('precio').innerHTML='${extras.precio}'">
   <div>
  <img src=${extras.img} width="80px" id='imgP' alt=${extras.producto}>
   </div>
   <div id="nombrePrecio">
  <h4 id='nProducto'>${extras.producto}</h4>
  <h4 id="nPa">$ ${extras.precio} cup</h4> 
   </div>
  </a>
  
  </li>
  <hr>
  
 `
 document.getElementById('mostrarPro').innerHTML= html
 })
 })
 }
//plato de extras fin

//document.addEventListener("DOMContentLoaded", pizzas, entrantes)

function datosCliente(){
  const form = document.getElementById('clienteForm');
  const hi = document.getElementById("saludarCliente")
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
   
    const datosclienteBro = 
      {
         "nombre": nombre,
         "telefono": telefono,
         "direccion": direccion
      }   
if(nombre === "" || telefono=== "" || direccion=== ""){
alert("Faltan datos")
    }else{
      localStorage.setItem("dataBro", JSON.stringify(datosclienteBro))
      localStorage.setItem("dataBro2", "listo")
     // document.getElementById("saludarCliente").innerHTML= "Bienvenido a la app"+ " "+ nombre 
      clienteListo()
      document.getElementById('clienteForm1').reset()
    }
      

;
}
function clienteListo(){
  Swal.fire({
    title: 'Guardado correctamente',
    text: 'Tu información ha sido guardada.',
    imageUrl: 'assets/exito.png', // Cambia esto por la URL de tu ícono
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'Custom image',
    showConfirmButton: false,
    timer: 1500
});
}
