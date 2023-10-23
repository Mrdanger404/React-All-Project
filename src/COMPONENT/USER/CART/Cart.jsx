import { useParams } from 'react-router-dom'
import '../../CSS/CART/Cart.css'
import Header from '../../HOME/Header'
import { useEffect, useState } from 'react'
import { ref,get, set, child, remove } from 'firebase/database'
import { database } from '../../../ADMIN/Data'
import Confirmed from './Confirmed'

const Cart = () => {
  const {uid} = useParams();

  const [data, setData] = useState([]);

  const cart = data.length;

  useEffect(()=>{
    const dbRef = ref(database)
    get(child(dbRef, `cart/${uid}`))
    .then((snapshot) => {
      const DataArray = []
      snapshot.forEach((childSnapshot) => {
        DataArray.push(childSnapshot.val());
      });
      setData(DataArray)
    })
  },[uid])
  

  const handleDelete = (productId, productName) => {

    const itemRef = ref(database, `cart/${uid}/${productId}`);

    remove(itemRef)
    .then(() => {
      alert(`${productName} is deleted`);
      window.location.reload();
    })
    .catch((Error) => {
      alert(Error)
    });
  }

  const handleConfirm = (productPrice, productName, productImage, productId) => {
    const removeRef = ref(database, `cart/${uid}/${productId}`);

    set(ref(database, `cart/confirmed/${uid}/${productId}`),{
      productPrice,
      productName,
      productImage,
      productId
    })
    .then(()=> {
      alert(`${productName} is confirmed`)
    });

    remove(removeRef)
    .then(()=> {
      window.location.reload();
    })
  }

  return (
    <>
    <Header cart = {cart} />
    <div  className='cart-container'>
          {data.map((items) => {
          const {productPrice, productName, productImage, productId} = items
          return <div key={productId} className='cart-card'>
              <img src={productImage} alt='img' />
              <div className='cart-details'>
                <h3>Model : {productName}</h3>
                <p>tk : {productPrice}</p>
              </div>
              <button onClick={()=> handleDelete(productId, productName)}>Delete</button>
              <button onClick={()=> handleConfirm(productPrice, productName, productImage, productId)}>Confirm</button>
            </div>
          
        })}
        
    </div>
    <Confirmed uid = {uid} />
    </>
  )
}

export default Cart