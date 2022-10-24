let allProducts = [{ id: 1, name: "book", price: 2000 }, { id: 2, name: "notebook", price: 6000 }, { id: 3, name: "milk", price: 5000 }, { id: 4, name: "marker", price: 10000 }, { id: 5, name: "t-shert", price: 8000 }]
let userBasket = [{ id: 1, name: "book", price: 2000 }, { id: 2, name: "notebook", price: 6000 }, { id: 3, name: "milk", price: 5000 }]
let filterPrice = userBasket.filter(function (product) {
    return product.price < 5000
})
let postCost = filterPrice.length * 1000
let total = 0
let totalPrice = userBasket.forEach(function (product) {
    total = total + product.price
})
let final = postCost + total
console.log(final)