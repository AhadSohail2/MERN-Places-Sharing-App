import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../UI/Button"
import styles from './Search.module.css';
function Search() {

    const navigate = useNavigate();
    const SearchRef = useRef();

    const SearchHandler = (event) => {
        event.preventDefault();
        const Searched = SearchRef.current.value.replaceAll(" ","-");

        if (Searched.trim().length === 0) {
            return
        } else {
            navigate(`/Products/${Searched}`);
        }

    }

    return (
        <form className={`container ${styles.form}`} onSubmit={SearchHandler}>
            <input type="text" placeholder='Search' ref={SearchRef}></input>
            <Button text="Search" />
        </form>
    )
}

export default Search
