/* JS para comprar_tickets.html */

function calculoEntradas(event) {
    event.preventDefault();
    let nombre = document.getElementById('NombreInput').value;
    console.log(nombre)
    let apellido = document.getElementById('ApellidoInput').value;
    console.log(apellido)
    let mail = document.getElementById('EmailInput').value;
    console.log(mail)
    let cantidad = document.getElementById('cantidadInput').value;
    console.log(cantidad)
    let categoria = document.getElementById('categoriaInput').value;
    console.log(categoria)
    
    valor = 200;
    
    switch (categoria){
        case "estudiante":
            valor = valor - (valor * 80/100); break;
        case "trainee":
            valor = valor - (valor * 50/100); break;
        case "junior":
            valor = valor - (valor * 15/100); break;
        default:
            alert('Selecciona una opción de categoría');
    }
    console.log('Total a Pagar: $ ' + (valor * cantidad));

    var botonRespuesta = document.getElementById('ResumenPago');
    botonRespuesta.style.display = 'block';
    botonRespuesta.textContent = 'Total a Pagar: $ ' + (valor * cantidad);      
}

const formulario = document.getElementById('formularioTickets');

formulario.addEventListener('submit',calculoEntradas)