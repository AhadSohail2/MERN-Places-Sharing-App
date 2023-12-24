
import styles from './Header.module.css';
import Nav from './Nav';

const Header = () => {
    return(
    <div className={styles.header}>

        <div className={styles.header__logo}>
            <h1>Logo Here</h1>
        </div>
        
        <Nav />

    </div>
    )
}

export default Header;