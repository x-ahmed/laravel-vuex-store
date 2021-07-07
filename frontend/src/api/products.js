import Api from "./index";
import {PRODUCTS_END_POINT} from './index'

export default {
    async all(){
        const res = await Api.get(PRODUCTS_END_POINT)
        return res.data
    },

    async getProductById (id) {
        const res = await Api.get(`${PRODUCTS_END_POINT}/${id}`)
        return res.data;
    },
}
