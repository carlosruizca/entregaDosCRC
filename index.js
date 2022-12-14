console.table(productos)

// 01. Función aplicar descuento.
// Verifica si un producto tiene oferta, en caso de ser así, se informará que tiene descuento

console.log(productos)

function verificarOferta ( array )
{
    for ( let i = 0; i <array.length; i++)
    {   
        console.log(array[i])   
        if ( array[i].oferta === true)
        {
            console.log(`El producto ${array[i].nombreProducto} tiene un 5% de descuento`)
        }
    }
}

verificarOferta (productos)


// 02. Organizar la lista de productos
// Mediante un prompt, se le pregunta al usuario cómo desea ordenar la lista de productos, entre las opciones A-Z o Z-A. La lista de productos se organizará siguiento la opción elegida por el usuario.
// Subfunciones organizarAZ organizarZA

function organizarProductos ( array )
{
    let formaOrganizar = prompt("Cómo desea organizar sus productos? A:Desde la A, Z:desde la Z")
    {
        if (formaOrganizar === "A")
        {
            const productosAZ = [...productos].sort((a,b) =>
            {
                if (a.nombreProducto < b.nombreProducto)
                    {
                        return -1
                    }
                else if (a.nombreProducto > b.nombreProducto)
                    {
                        return 1
                    }
                else return 0
            })
            console.log(productosAZ)
        }
        else if(formaOrganizar === "Z")
        {
            const productosZA = [...productos].sort((a,b) => 
            {
                if (a.nombreProducto < b.nombreProducto)
                    {
                        return 1
                    }
                else if (a.nombreProducto > b.nombreProducto)
                    {
                        return -1
                    }
                else return 0
            })

console.log(productosZA)
        }
        else {
            console.log("Elija por favor una opción entre A o Z")
        }
    }
}

organizarProductos(productos)

// 03. Buscar ofertas
// Mediante un prompt, se le pregunta al usuario si quiere revisar los productos con ofertas disponibles.


function buscarOfertas ( array )
{
    let revisarOfertas = prompt ("Desea revisar los productos en oferta? S/N")
    {
        if (revisarOfertas === "S")
        {
            const productosOferta = [...productos].filter((elemento) => 
            {
             return elemento.oferta === true
            })
            console.log(productosOferta)
        }
    }
}

buscarOfertas(productos)

// 04. Buscar producto
// Mediante un prompt, se le pregunta al usuario por el nombre del producto que desea encontrar. De estar incluido en el listado, se le informa al respecto

function buscarProducto ( array )
{
    let productoBuscado = prompt("Favor ingrese el producto que desea buscar")
    for (i = 0; i < productos.length; i++)
    {
        if ( productos[i].nombreProducto === productoBuscado)
            {
                console.log("Sí manejamos el producto")
                break;

            }
        else
            {
                console.log("No hay")
            }
    }
}

buscarProducto(productos)