export const cart = ({cart}) => cart
export const cartCount = ({cart}) => cart.length
export const totalPrice = ({cart}) => {
  let total = 0;
  cart.forEach(({product, quantity}) => {
    total += product.price * quantity
  })
  return parseInt(total);
}