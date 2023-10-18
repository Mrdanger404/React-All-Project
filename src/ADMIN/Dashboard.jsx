import { useState } from "react";
import { database, storage } from "./Data";
import { ref,set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const Dashboard = () => {
    // const [product, setProduct] = useState("");
    const [selectedProduct, setSelectedProduct] = useState({
        product: '',
        type: ''
    })
    const [id, setId] = useState("");
    const [productName, setProductName] = useState("");
    const [productValue, setProductValue] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [details, setDetails] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const imageRef = storageRef(storage, `${selectedProduct.product}/${productName}`);
    
        try {
            // Upload the image
            await uploadBytes(imageRef, productImage);
    
            // Get the download URL
            const downloadURL = await getDownloadURL(imageRef);
            console.log("Download URL:", downloadURL);
    
            if (downloadURL) {
                // Set the product data in the database
                await set(ref(database, `${selectedProduct.product}/${productName}`), {
                    product: selectedProduct.product,
                    productId: id,
                    productName: productName,
                    productPrice: productValue,
                    productImage: downloadURL, // Store the download URL
                    productDetails: details
                });
    
                console.log("Data stored in the database.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <select value={selectedProduct.product} onChange={(e)=>{setSelectedProduct({...selectedProduct, product:e.target.value})}}>
                        <option>choose product</option>
                        <option value="bike">Bike</option>
                        <option value="laptop">Laptop</option>
                        <option value="mobile">Mobile</option>
                    </select>
                    <select value={selectedProduct.type} onChange={(e)=>setSelectedProduct({...selectedProduct, type:e.target.value})}>
                        {selectedProduct.product === "bike" && (
                            <>
                                <option>choose bike</option>
                                <option value="honda">Honda</option>
                                <option value="pulsure">Pulsure</option>
                            </>
                        )}
                        {selectedProduct.product === "laptop" && (
                            <>
                                <option>choose laptop</option>
                                <option value="msi">Msi</option>
                                <option value="hp">Hp</option>
                            </>
                        )}
                        {selectedProduct.product === "mobile" && (
                            <>
                                <option>choose iphone</option>
                                <option value="iphone">Iphone</option>
                                <option value="itel">Itel</option>
                            </>
                        )}
                    </select>
                    <input type="number" placeholder="Product ID" value={id} onChange={(e) => setId(e.target.value)} />
                    <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    <input type="number" placeholder="Product Value" value={productValue} onChange={(e) => setProductValue(e.target.value)} />
                    <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
                    <textarea placeholder="Product Details" value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Dashboard;
