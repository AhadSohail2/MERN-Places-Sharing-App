import React , {useContext} from 'react'
import CartContext from '../../store/CartCtx'
function CartComponent() {
    
    const CartCtx=useContext(CartContext);


    return (
        <div className='container'>
            <h1>Cart</h1>
            {CartCtx.Products.map((product)=>{
                return <li>{product.title}  {`$${product.price}`}</li>
            })}
        </div>
    )
}

export default CartComponent
