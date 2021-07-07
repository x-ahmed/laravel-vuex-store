import axios from "axios";

export const getProducts = ({commit}) => {
    axios.get('http://127.0.0.1:8000/api/products')
        .then(res => {
            commit('SET_PRODUCTS', res.data)
        })
}

export const getProduct = ({commit}, id) => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`)
        .then(res => {
            commit('SET_PRODUCT', res.data)
        })
}

export const addProductToCard = ({commit}, payload) => {
    commit('SET_PRODUCT_TO_CART', payload)
    axios.post('http://127.0.0.1:8000/api/cart', {
        product_id: payload.product.id,
        quantity: payload.quantity,
    })
}

export const getCart = ({commit}) => {
    axios.get('http://127.0.0.1:8000/api/cart')
        .then(res => {
            commit('SET_CART', res.data)
        })
}