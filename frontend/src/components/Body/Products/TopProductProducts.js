import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../UI/Button';
import styles from './ProductProducts.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/CartCtx';
function TopProductProducts(props) {

    const CartCtx=useContext(CartContext);


    const UrlProductName = props.productName.replaceAll(" ", "-");


    const addToCartHandler=()=>{
        CartCtx.addProduct(props.product);
    }

    return (
        <div className={styles.product}>
            <div className={styles.product__img}>
                <img src={props.ImgSrc} alt={props.ImgAlt}></img>
            </div>
            <div className={styles.product__name}>

                <Link to={`/product/${props.id}/${UrlProductName}`}>{props.productName}</Link>
            </div>

            <div className={styles.product__price}>
                ${props.price}
            </div>
            <Button onClick={addToCartHandler} text="Add To Cart" />
        </div>
    )
}

export default TopProductProducts
