import ProductApi from "../../../api/products";

export const getProducts = async ({commit}) => {
    const products = await ProductApi.all()
    commit('SET_PRODUCTS', products)
}

export const getProduct = async ({commit}, id) => {
    const product = await ProductApi.getProductById(id)
    commit('SET_PRODUCT', product)
}