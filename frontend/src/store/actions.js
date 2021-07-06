import axios from "axios";

export const getProducts = ({commit}) => {
    axios.get('http://127.0.0.1:8000/api/products')
        .then(res => {
            commit('GET_PRODUCTS', res.data)
        })
}