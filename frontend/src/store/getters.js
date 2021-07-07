export const products = (state) => state.products
export const product = ({product}) => product
export const cart = ({cart}) => cart
export const totalPrice = ({cart}) => {
  let total = 0;
  cart.forEach(({product, quantity}) => {
    total += product.price * quantity
  })
  return parseInt(total);
}