/**
 Crear la función calcular, para que se puede ejecutar, 
 dando click en el boton calular, que está en el index.html, todo esto
 se llama el DOM, el cual permite la referencias entre el html, css y js
 */

//  funcion tradicional

function calcular() {
    // definir las variables para precio y cantidad
    let precio = document.simulador.precio.value;
    let cantidad = document.simulador.cantidad.value;

    // definir la constante del IVA
    const iva = 0.19;

    // capturar el producto, este es el select
    producto = document.getElementById('producto').value;

    // utilizar el condicional if - else, para validar que los campos, si no estan required, no se dejen vacios

    if (precio == 0 || precio == null || cantidad == null || cantidad == 0) {
        // utilizar un objeto de ventana llamada alert
        alert('Digitar valores en precio y cantidad');
        
    }else{
        // definir variables para realizar los calculos
        // valor total
        let vt = precio * cantidad;
        // determinar el procentaje del iva de acuerdo al producto
        let vi = vt * iva;
        // determinar el total a pagar
        let tp = vt + vi;

        // mostrar las operaciones
        // mostrar el producto
        document.getElementById("valorProducto").innerHTML = producto;
        document.getElementById("valorPrecio").innerHTML = precio;
        document.getElementById("valorTotal").innerHTML = vt;
        document.getElementById("valorIva").innerHTML = vi;
        document.getElementById("totalPagar").innerHTML = tp;

    }

}