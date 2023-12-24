import styles from './Button.module.css'

function Button(props){
    return(
        <button 
        
        className={styles.button + ' ' + props.className} 
        onClick={props.onClick}>
        {props.text}
        </button>
    )
}

export default Button;