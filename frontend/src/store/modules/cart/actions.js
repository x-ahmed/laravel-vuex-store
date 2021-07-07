import CartApi from "../../../api/carts";

export const addProductToCard = async ({commit, dispatch}, payload) => {
    commit('SET_PRODUCT_TO_CART', payload)

    dispatch('pushNotification', {
        type: 'success',
        message: 'product added to card',
    }, {root: true})

    await CartApi.pushProductToCart({
        product_id: payload.product.id,
        quantity: payload.quantity,
    })
}

export const getCart = async ({commit}) => {
    const cart = await CartApi.getCart()
    commit('SET_CART', cart)
}

export const removeFromCart = async ({commit, dispatch}, product) => {
    commit('REMOVE_FROM_CART', product)

    dispatch('pushNotification', {
        type: 'success',
        message: 'product removed',
    }, {root: true})

    await CartApi.removeFromCart(product.id)
}

export const clearCart = async ({commit, dispatch}) => {
    commit('CLEAR_CART')

    dispatch('pushNotification', {
        type: 'success',
        message: 'cart removed',
    }, {root: true})

    await CartApi.destroyCart()
}