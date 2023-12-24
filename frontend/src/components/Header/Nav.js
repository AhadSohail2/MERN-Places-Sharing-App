import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import Button from "../../UI/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/CartCtx";
import { useContext } from "react";

const Nav = () => {

   const CartCtx=useContext(CartContext)

    const navigate=useNavigate();

    const CartClickHandler = () => {
        navigate("/cart",{replace:false});
    }

    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/Home">Home </Link></li>
                <li><Link to="/AboutUs">About Us </Link></li>
                <li><Link to="/ContactUs">Contact Us </Link></li>
                <li><Link to="/Login"><Button text="Login" /></Link></li>
                <li onClick={CartClickHandler} className={styles.CartIcon}><FontAwesomeIcon icon={faShoppingCart} /> <span className={styles.cartItems}>Cart ({CartCtx.Total})</span></li>
            </ul>
        </nav>
    )
}

export default Nav;