const addToDb = id => {
    let shoppingItems = {};

    const storedItems = localStorage.getItem('shopping-items');
    if (storedItems) {
        shoppingItems = JSON.parse(storedItems)
    }
    //quantity
    const quantity = shoppingItems[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingItems[id] = newQuantity;
    }
    else {
        shoppingItems[id] = 1;
    }
    localStorage.setItem('shopping-items', JSON.stringify(shoppingItems));
}

const getStoredCart = () => {
    let shoppingItems = {};

    const storedItems = localStorage.getItem('shopping-items');
    if (storedItems) {
        shoppingItems = JSON.parse(storedItems)
    }
    return shoppingItems;
}

export { addToDb , getStoredCart}