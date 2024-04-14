import { useContext } from "react";
// import logoImg from "./images/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/userProgressContext";
import Button from "./UI/Button";
export default function Header(){
    const cartCtx=useContext(CartContext);
const userProgressCtx=useContext(UserProgressContext);
    const totalCartItems=cartCtx.items.reduce((totalNumberOfItems,item)=>{
        return totalNumberOfItems+item.quantity;
    },0);
    function handleShowCart(){
        userProgressCtx.showCart();
        console.log(userProgressCtx.progress)
    }
    return <header id="main-header">
        <div id="title">
            <img src={`./images/logo.jpg`} alt="logo"></img>
            <h1>Food Order APP</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
} 