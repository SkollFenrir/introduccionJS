function calcularTotal (){
    var cantidad = Number (document.querySelector('#cantidad').value);

    var color = document.querySelector('#color').value;

    var precio = Number (document.querySelector('#precio').innerHTML);

    var total = cantidad * precio;

    var totalElement= document.querySelector('#totalElement');
    totalElement.innerHTML = total;

    var cantidadElement = document.querySelector('#cantidadElement');
    cantidadElement.innerHTML = cantidad;

    document.querySelector('#colorElement').style.backgroundColor = color;

    /* console.log (cantidad)
    console.log (color) */
}
