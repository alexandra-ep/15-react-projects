import { useGlobalContext } from "../../context/context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

export default function Cart() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading_products">
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <div className="cart">
      <Navbar />
      <CartContainer />
    </div>
  );
}
