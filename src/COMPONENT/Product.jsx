import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { database } from "../ADMIN/Data";
import { ref, child, get } from 'firebase/database';

const Product = () => {
    const { productId } = useParams();

    const [bikes, setBikes] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [mobiles, setMobiles] = useState([]);

    const [info, setInfo] = useState(null);

    const fetchDataAndMerge = async (category, setData) => {
        const dbRef = ref(database);
        const categoryRef = child(dbRef, category);
        const snapshot = await get(categoryRef);
        const categoryArray = [];
        snapshot.forEach((childSnapshot) => {
            categoryArray.push(childSnapshot.val());
        });
        setData(categoryArray);
    };

    useEffect(() => {
        Promise.all([
            fetchDataAndMerge("bike", setBikes),
            fetchDataAndMerge("laptop", setLaptops),
            fetchDataAndMerge("mobile", setMobiles)
        ]).then(() => {
            const mergedData = bikes.concat(laptops, mobiles);
            const data = mergedData.find((item) => item.productId === productId);
            if (data) {
                setInfo(data);
            } else {
                setInfo(null); // Set to null when product is not found
            }
        });
    }, [bikes, laptops, mobiles, productId]);

    return (
        <div>
            {info ? (
                <div>
                    <p>Product ID: {info.productId}</p>
                    {/* Display other properties of 'info' here */}
                </div>
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
};

export default Product;
