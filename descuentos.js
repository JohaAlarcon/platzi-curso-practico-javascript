//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento (precio, descuento) {
    const PorcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * PorcentajePrecioConDescuento)/100;
    return precioConDescuento;

}

function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById ("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById ("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue,discountValue);

    const resultPrice = document.getElementById ("resultPrice");
    resultPrice.innerText = "El precio con descuento es $: " + precioConDescuento;
}




// console.log ({
//     precioOriginal,
//     descuento,
//     PorcentajePrecioConDescuento,
//     precioConDescuento,

// });