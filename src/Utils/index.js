//el parametro de tipo array  de objetos llamado products retorna number totalprice calcula el total price de la new order 

export const totalPrice = (products) => {
    let sum= 0
    products.forEach(product=>sum += product.price)
    return sum
}