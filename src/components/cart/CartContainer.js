import CartItem from "./CartItem";
import { useGlobalContext } from "../../context/context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart__container__header">
        {/*cart header */}
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart__container">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div className="cart__container__items">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
