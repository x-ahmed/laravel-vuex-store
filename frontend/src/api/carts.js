import Api from './index'
import {CART_END_POINT} from './index'

export default {
    async pushProductToCart(payload) {
        await Api.post(CART_END_POINT, payload)
    },

    async getCart() {
        const res = await Api.get(CART_END_POINT)
        return res.data;
    },

    async removeFromCart(id) {
        await Api.delete(`${CART_END_POINT}/${id}`)
    },

    async destroyCart() {
        await Api.delete(CART_END_POINT)
    }
}