let allProducts = [{ id: 1, name: "book", price: 2000 }, { id: 2, name: "notebook", price: 6000 }, { id: 3, name: "milk", price: 5000 }, { id: 4, name: "marker", price: 10000 }, { id: 5, name: "t-shert", price: 8000 }]
let userBasket = [{ id: 1, name: "book", price: 2000 }, { id: 2, name: "notebook", price: 6000 }, { id: 3, name: "milk", price: 5000 }]
let ask = prompt("What do you want to add to your basket?")
let askProduct;
let exist = allProducts.some(function (product) {
    if (product.name === ask) {
        askProduct = product
        return true
    }
})
if (exist === true) {
    let newProduct = { id: 4, name: askProduct.name, price: askProduct.price }
    userBasket.push(newProduct)
    let totalPrice = 0
    userBasket.forEach(function (product) {
        totalPrice = totalPrice + product.price
    })
    console.log(userBasket)
    alert("total:" + totalPrice)
} else {
    console.log("there is not exist")
}