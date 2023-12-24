import styles from './Heading.module.css';

function Heading(props){
    return(
    <h2 className={styles.heading}>{props.text}</h2>
    )
}

export default Heading;