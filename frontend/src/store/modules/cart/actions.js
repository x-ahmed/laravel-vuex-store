import CartApi from "../../../api/carts";

export const addProductToCard = async ({commit}, payload) => {
    commit('SET_PRODUCT_TO_CART', payload)
    await CartApi.pushProductToCart({
        product_id: payload.product.id,
        quantity: payload.quantity,
    })
}

export const getCart = async ({commit}) => {
    const cart = await CartApi.getCart()
    commit('SET_CART', cart)
}

export const removeFromCart = async ({commit}, product) => {
    commit('REMOVE_FROM_CART', product)
    await CartApi.removeFromCart(product.id)
}

export const clearCart = async ({commit}) => {
    commit('CLEAR_CART')
    await CartApi.destroyCart()
}