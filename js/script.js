 // Aquí tu código
const boton = document.getElementById("agregar")


boton.addEventListener("click",function(){
    let dato = prompt("Ingresa una fruta");
    let punto =document.createElement("li");
    const nuevo = document.createTextNode(dato);
    punto.appendChild(nuevo);
    const lista =document.getElementById("lista");
    document.body.insertBefore(punto,lista);    
    

})