
// Product Item
const item = {
    itemName: "Flower",
    price: 59,
    discount: 10,
    itemCode: 100
}

// 1st way to create an object
function createItem(name, price, discount, itemCode){
    return{
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}

// 2nd way to create an object
