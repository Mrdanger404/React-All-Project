import { child, ref, get } from "firebase/database"
import { useEffect, useState } from "react"
import { database } from "../../../ADMIN/Data"

const Confirmed = ({uid}) => {
    const [confirmedProducts, setConfirmedProducts] = useState([]);
    useEffect(()=>{
        const dbRef = ref(database);
        get(child(dbRef, `cart/confirmed/${uid}`))
        .then((snapshot) => {
            const dataArray = [];
            snapshot.forEach((childSnapshot)=> {
                dataArray.push(childSnapshot.val());
            });
            setConfirmedProducts(dataArray);
        })
        .catch((error) => {
            console.log(error)
        })
    },[uid])
    console.log(confirmedProducts)
  return (
    <>
        <div className="cart-container">
        {confirmedProducts.map((items) => {
            const {productPrice, productName, productImage, productId} = items;
            return <div key={productId} className="cart-card">
                <img src={productImage} alt="image not found" />
                <div className="cart-details">
                    <h3>Model : {productName}</h3>
                    <p>Tk : {productPrice}</p>
                </div>
                <button disabled >Confirmed</button>
            </div>
        })}
    </div>
    </>
  )
}

export default Confirmed