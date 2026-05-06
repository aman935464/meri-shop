import useCartStore from '../store/useCartStore';

export default function usePriceCalc() {
  const { cart } = useCartStore();
  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const subTotal = cart.reduce((total, item) => {
    return total + (item.price - (item.price * item.discount/100)) * item.quantity;
  }, 0);
  
  const discountRate = 15 / 100;
  const taxRate = 18 / 100;
  const discount = Number((subTotal * discountRate).toFixed(1));
  const tax = Number(((subTotal - discount) * taxRate).toFixed(1));
  const totalAmount = Number(subTotal - discount + tax).toFixed(1);

  return {
    totalQuantity,
    subTotal,
    discountRate,
    taxRate,
    discount,
    tax,
    totalAmount
  }
}
