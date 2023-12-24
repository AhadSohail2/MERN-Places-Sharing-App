import { Fragment, useEffect, useState } from "react";
import styles from "./Slider.module.css";

const Slider = () => {

    const [Translate, setTranslate] = useState(0);

    const Imgs = [
        {
            id:"1",
            src: "https://icms-image.slatic.net/images/ims-web/8987c852-dee4-4ec9-b550-db952383f9b8.jpg_1200x1200.jpg",
            alt: "Hello"
        },
        {
            id:"2",
            src: "https://icms-image.slatic.net/images/ims-web/433cfe64-be26-4d01-9d44-3f53179db577.jpg",
            alt: "Hello"
        },
        {
            id:"3",
            src: "https://icms-image.slatic.net/images/ims-web/e1d0ee4c-05a0-496c-9651-3a50a36bf4d7.jpg",
            alt: "Hello"
        },
        {
            id:"4",
            src: "https://icms-image.slatic.net/images/ims-web/ebc5a1d1-f7cd-4b8d-98cc-6a39d089451d.jpg",
            alt: "Hello"
        }
    ]

    const InnerWidth=window.innerWidth;
    const translate=InnerWidth * Imgs.length;
    const TotalTranslate=translate-InnerWidth;

    useEffect(()=>{
            const Interval=setInterval(()=>{

                if(Translate===TotalTranslate){
                    setTranslate(0);
                }else{
                    setTranslate(Translate+InnerWidth)
                }
                clearInterval(Interval);
            },6000)
// eslint-disable-next-line
    },[Translate])
    return (
        <Fragment>

            <div className={styles.slides}>

                {Imgs.map(
                    Img => {
                        return (
                            <div className={styles.slide} key={Img.id}>
                                <img  src={Img.src} alt={Img.alt} style={{transform:`TranslateX(${-Translate}px)`}}></img>
                            </div>
                        )
                    }
                )}
            </div>
        </Fragment>
    )

}

export default Slider;