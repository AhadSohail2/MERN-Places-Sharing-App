import { createContext } from "react";
const CartContext=createContext({
    Products:[],
    Total:0,
    addProduct:(name)=>{}
})

export default CartContext;




