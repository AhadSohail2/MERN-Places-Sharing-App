import  CartContext  from "./CartCtx";
import { useState } from "react";


function CartCtxProvider(props){
    const [products,setProducts]=useState([]);

    function AddProduct(product){
        setProducts((prev)=>
            prev.concat([product])
        )
    }

    const context={
        Products:products,
        Total:products.length,
        addProduct:AddProduct
    }

    return(
    <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
    )
}

export default CartCtxProvider;