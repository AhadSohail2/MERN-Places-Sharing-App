import React from 'react'
import Heading from "../../../UI/Heading";
import TopProductProducts from './TopProductProducts';
import styles from "./TopProducts.module.css"


const DummyTopProducts=[
    {
        id:1,
        title:"Korneez (BBQ Popcorn Premium)",
        price:"5",
        img:"https://static-01.daraz.pk/p/310953442ea9cf7a05f6a962660256a1.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:2,
        title:"Drawer For Make Up Kit and For accesories",
        price:"10",
        img:"https://static-01.daraz.pk/p/e45836cb6a1d4b7061eebeb6dee25ca8.jpg_200x200q80-product.jpg_.webp"
    },
    {
        id:3,
        title:"Vintage Shirt For Mens Completly Fiber",
        price:"3",
        img:"https://static-01.daraz.pk/p/5bba7849875be2272c89e70cfdfc85b6.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:4,
        title:"Kitchen Faucet Sprayer, 360 Degree ",
        price:"5",
        img:"https://static-01.daraz.pk/p/7736f6f84063a23bca6641dfb306af55.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:5,
        title:"Nova 1290 Professional Hair Dryers",
        price:"5",
        img:"https://static-01.daraz.pk/p/b4e2495755707fc79c2c9db6c13e7d65.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:6,
        title:"Korneez (BBQ Popcorn Premium)",
        price:"5",
        img:"https://static-01.daraz.pk/p/310953442ea9cf7a05f6a962660256a1.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:7,
        title:"Korneez (BBQ Popcorn Premium)",
        price:"5",
        img:"https://static-01.daraz.pk/p/310953442ea9cf7a05f6a962660256a1.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:8,
        title:"Korneez (BBQ Popcorn Premium)",
        price:"5",
        img:"https://static-01.daraz.pk/p/310953442ea9cf7a05f6a962660256a1.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:9,
        title:"Korneez (BBQ Popcorn Premium)",
        price:"5",
        img:"https://static-01.daraz.pk/p/310953442ea9cf7a05f6a962660256a1.jpg_200x200q75-product.jpg_.webp"
    },
    {
        id:10,
        title:"Korneez (BBQ Popcorn Premium)",
        price:"5",
        img:"https://static-01.daraz.pk/p/310953442ea9cf7a05f6a962660256a1.jpg_200x200q75-product.jpg_.webp"
    },

   
   
]

function TopProducts() {
    return (
        <div className={`container ${styles.TopProductsContainer}`}>
            <Heading text="Top Products"/>
            <div className={styles.TopProducts}>

            {
                DummyTopProducts.map((product)=>{
                   return <TopProductProducts product={product} key={product.id} id={product.id} productName={product.title} price={product.price} ImgSrc={product.img} />
                })
            }

                
            
                
               
            </div>
        </div>
    )
}

export default TopProducts
