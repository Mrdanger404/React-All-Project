import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./HOME/Header";
import useFindData from "./CUSTOMHOOK/useFindData";
import './CSS/PRODUCTPAGE/Initial.css'

const Product = () => {
    const { productId } = useParams();
    const {bikes, laptops, mobiles} = useFindData()

    const [info, setInfo] = useState(null);

    useEffect(() => {
        const margeData = bikes.concat(laptops, mobiles);
        const data = margeData.find((item) => item.productId === productId);
        if (data) {
            setInfo(data)
        } else {
            setInfo(null)
        }
    }, [bikes, laptops, mobiles, productId]);
 
    console.log(info)
    return (
        <div>
        <Header />
            <div className="products">
            {info ? (
                <div className="product-info">
                    <p>Product ID: {info.productId}</p>
                    <p>product model : {info.productName}</p>
                </div>
            ) : (
                <div>Product not found</div>
            )}
            </div>
        </div>
    );
};

export default Product;
