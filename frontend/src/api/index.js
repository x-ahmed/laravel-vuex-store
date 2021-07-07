import axios from "axios";

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
})

export const PRODUCTS_END_POINT = 'products'
export const CART_END_POINT = 'cart'
export default Api