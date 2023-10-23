import { useState } from "react";
import { database, storage } from "./Data";
import { ref,set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import useSetData from "./useSetData";

const Dashboard = () => {
    const {bikeDetails, setBikeDetails, laptopDetails, setLaptopDetails, mobileDetails, setMobileDetails} = useSetData()
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

    const [offerId, setOfferId] = useState("");
    const [offerImage, setOfferImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const imageRef = storageRef(storage, `${selectedProduct.product}/${productName}`);
    
        try {
            // Upload the image
            await uploadBytes(imageRef, productImage);
    
            // Get the download URL
            const downloadURL = await getDownloadURL(imageRef);
    
            if (downloadURL) {
                // Set the product data in the database
                
                await set(ref(database, `${selectedProduct.product}/${productName}`), {
                    product: selectedProduct.product,
                    productBrand: selectedProduct.type,
                    productId: id,
                    productName: productName,
                    productPrice: productValue,
                    productImage: downloadURL,
                    details: details,
                    engine: bikeDetails.engine,
                    power: bikeDetails.power,
                    torque: bikeDetails.torque,
                    mileage: bikeDetails.mileage,
                    brakes: bikeDetails.brakes,
                    tyreType: bikeDetails.tyreType
                })
    
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const handleSetOffer = async (e) => {
        e.preventDefault();
        const offerImageRef = storageRef(storage, `offer/${offerId}`);

        try {
            await uploadBytes(offerImageRef, offerImage);

            const offerImageUrl = await getDownloadURL(offerImageRef);
            console.log('offer image',offerImageUrl)
            if(offerImageUrl) {
                await set(ref(database, `offer/${offerId}`), {
                    offerImageUrl: offerImageUrl
                });
            }
        } catch(error) {
            console.log(error)
        }
    }
    console.log(bikeDetails)
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
                    {selectedProduct.product === "bike" && (
                        <>
                            <input type="number" placeholder="Enter engine cc " value={bikeDetails.engine} onChange={(e) => setBikeDetails({...bikeDetails, engine:e.target.value})} />
                            <input type="number" placeholder="Enter engine cc " value={bikeDetails.power} onChange={(e) => setBikeDetails({...bikeDetails, power:e.target.value})} />
                            <input type="number" placeholder="Enter engine cc " value={bikeDetails.torque} onChange={(e) => setBikeDetails({...bikeDetails, torque:e.target.value})} />
                            <input type="number" placeholder="Enter engine cc " value={bikeDetails.mileage} onChange={(e) => setBikeDetails({...bikeDetails, mileage:e.target.value})} />
                            <input type="text" placeholder="Enter engine cc " value={bikeDetails.brakes} onChange={(e) => setBikeDetails({...bikeDetails, brakes:e.target.value})} />
                            <input type="text" placeholder="Enter engine cc " value={bikeDetails.tyreType} onChange={(e) => setBikeDetails({...bikeDetails, tyreType:e.target.value})} />
                        </>
                    )}
                    {selectedProduct.product === "laptop" && (
                        <>
                            <input type="text" value={laptopDetails.processor} onChange={(e) => setLaptopDetails({...laptopDetails, processor:e.target.value})} />
                            
                        </>
                    )}
                    <input type="number" placeholder="Product ID" value={id} onChange={(e) => setId(e.target.value)} />
                    <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    <input type="number" placeholder="Product Value" value={productValue} onChange={(e) => setProductValue(e.target.value)} />
                    <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
                    <textarea placeholder="Product Details" value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                </form>
                <form onSubmit={handleSetOffer}>
                    <input type="number" placeholder="Enter offer image id" value={offerId} onChange={(e) => setOfferId(e.target.value)} />
                    <input type="file" onChange={(e) => setOfferImage(e.target.files[0])} />
                    <button type="submit">Set offer</button>
                </form>
            </div>
        </>
    );
};

export default Dashboard;
