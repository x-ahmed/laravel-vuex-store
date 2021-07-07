export const SET_PRODUCTS = (state, products) => {
    state.products = products
}

export const SET_PRODUCT = (state, product) => {
    state.product = product
}

export const SET_PRODUCT_TO_CART = (state, payload) => {
    let productInCart = state.cart.find(({product}) => product.id === payload.product.id)

    if(productInCart){
        productInCart.quantity += payload.quantity;
        return
    }
    state.cart.unshift(payload);
}

export const SET_CART = (state, cart) => state.cart = cart