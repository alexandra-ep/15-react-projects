import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import sublinks from "../components/stripe-submenu/data";
import products from "../components/cart/data";
import reducer from "../components/cart/reducer";

const cocktailsUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

/* PART OF CART */
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  loading: false,
  cart: products,
  total: 0,
  amount: 0,
};
/*____________________________*/

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /* SIDEBAR & MODAL */
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  /*____________________________*/

  /* STRIPE APP */
  const [isStripeSidebarOpen, setIsStripeSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openStripeSidebar = () => {
    setIsStripeSidebarOpen(true);
  };

  const closeStripeSidebar = () => {
    setIsStripeSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  /*____________________________*/

  /* CART */
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  /*
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };*/

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  /*____________________________*/

  /* COCKTAILS APP */

  /*____________________________*/

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
        isStripeSidebarOpen,
        isSubmenuOpen,
        openStripeSidebar,
        openSubmenu,
        closeStripeSidebar,
        closeSubmenu,
        page,
        location,
        ...state,
        clearCart,
        remove,
        //increase,
        //decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
