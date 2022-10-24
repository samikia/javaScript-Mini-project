let allProducts = [{ id: 1, name: "book", price: 2000 }, { id: 2, name: "notebook", price: 6000 }, { id: 3, name: "milk", price: 5000 }, { id: 4, name: "marker", price: 10000 }, { id: 5, name: "t-shert", price: 8000 }]
let userBasket = [{ id: 1, name: "book", price: 2000 }, { id: 2, name: "notebook", price: 6000 }, { id: 3, name: "milk", price: 5000 }]
let ask = prompt("1.add product \n 2.remove product ")
if (ask === "1") {
    let newProduct = prompt("enter the name of product you want:")
    let askProduct;
    let exist = allProducts.some(function (product) {
        if (product.name === newProduct) {
            askProduct = product
            return true
        }
    })
    if (exist === true) {
        let newProduct = { id: 4, name: askProduct.name, price: askProduct.price }
        userBasket.push(newProduct)
        console.log("basket:", userBasket)
    } else {
        alert("the product is not exist in our shop")
    }
} else if (ask === "2") {
    let newProduct = prompt("enter the name of product that you want to remove:")
    let findIndex = userBasket.findIndex(function (product) {
        return product.name === newProduct
    })
    userBasket.splice(findIndex, 1)
    console.log("basket:", userBasket)
} else {
    alert("please choose the right number")
}
