import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import  { UserProgressContextProvider } from "./store/userProgressContext";
import {CartContextProvider} from "./store/CartContext"
import CartCheckout from "./Components/CartCheckout";
import Errors from "./Components/Errors";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header></Header>
      <Meals></Meals>
      <Cart></Cart>
      {/* <Errors></Errors> */}
      <CartCheckout></CartCheckout>
    </CartContextProvider>
    </UserProgressContextProvider>
    
  );
}

export default App;
