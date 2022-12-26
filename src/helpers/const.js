export const API = "http://localhost:8000/posts";

export function getCountProductsInCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.products.length : 0;
}

export function calcSubPrice(product) {

    return +product.count * product.item.price;
}

export function calcTotalPrice(products) {
    return products.reduce((acc, curr) => {
        return (acc += curr.subPrice);
    }, 0);
}
