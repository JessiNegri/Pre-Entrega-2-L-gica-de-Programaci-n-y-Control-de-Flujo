let nombre = prompt("¡Bienvenido a Mar Bárbaro! ¿Cómo te llamás?");

const precioTaza = 13500;
const precioMate = 14500;
const precioCuenco = 16500;

let total = 0;
let seguirComprando = true;

while (seguirComprando) {
    let opcion = parseInt(prompt(
        "¿Qué producto querés comprar?\n" +
        "1 - Taza Niebla: $13500\n" + 
        "2 - Mate Calma: $14500\n" + 
        "3 - Cuenco Aurora: $16500\n" +
        "0 - Finalizar compra"
    ));

    if (opcion === 0) {
        seguirComprando = false;

    } else if (opcion >= 1 && opcion <= 3) {
        
        let nombreProducto = "";
        let precio = 0;

        if (opcion === 1) {
            nombreProducto = "Taza Niebla";
            precio = precioTaza;

        } else if (opcion === 2) {
            nombreProducto = "Mate Calma";
            precio = precioMate;

        } else {
            nombreProducto = "Cuenco Aurora";
            precio = precioCuenco;
        }

        let cantidad = parseInt(prompt(
            "¿Cuántas unidades de " + nombreProducto + " queres comprar?"
        ));

        if (cantidad > 0) {
            let subtotal = precio * cantidad;

            total = total + subtotal;

            alert(
                "Agregaste a tu compra:\n\n" +
                "Producto: " + nombreProducto + "\n" +
                "Precio unitario: $" + precio + "\n" +
                "Cantidad: " + cantidad + "\n" +
                "Subtotal: $" + subtotal + "\n\n" +
                "Total acumulado: $" + total
            );

        } else {
            alert("Ingresaste una cantidad inválida.");
        }

    } else {
        alert("La opción ingresada no es válida.");
    }
}

alert(
    "¡Gracias por visitar Mar Bárbaro," + nombre + "!\n\n" +
    "Total de la compra: $" + total
);