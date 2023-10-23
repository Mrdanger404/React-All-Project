import { useNavigate} from 'react-router-dom'
import '../../CSS/PRODUCTPAGE/Initial.css'
import { auth, database } from '../../../ADMIN/Data'
import { ref, set } from 'firebase/database'
import { useState,useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import useFindData from '../../CUSTOMHOOK/useFindData'



const Main = () => {
  const [combinedData, setCombinedData] = useState([]);
  const {bikes, laptops, mobiles} = useFindData();
  
  const productNavigate = useNavigate();
  useEffect(() => {

    const mergeData = bikes.concat(laptops,mobiles);
    setCombinedData(mergeData)

  },[bikes, laptops, mobiles])

  const handleCart = (products) => {


    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        set(ref(database, `cart/${authUser.uid}/${products.productId}`), {
          productName : products.productName,
          product: products.product,
          productDetails: products.productDetails,
          productImage: products.productImage,
          productId: products.productId,
          productPrice: products.productPrice
        })
        .then(()=>{
          alert(`${products.productName} is added to cart`)
        })
      } else {
        alert("Please sign in and try again")
      }
    })

    return () => unsubscribe()
      
    
  }
  return (
    <div className='products'>
    {combinedData.map((items, index)=>{
      const {productImage, productName, productPrice, productId} = items;
      return <div className='container' key={index}>
        <img src={productImage} alt='image' />
        <div className='content'>
          <div className='details'>
            <h3>Model: {productName}</h3>
            <p>tk {productPrice}</p>
            <div className='button'>
                    <button onClick={()=> productNavigate(`product/${productId}`)}>Details</button>
                    <button onClick={() => handleCart(items)}>Add to cart</button>
                </div>
          </div>
        </div>
      </div>
    })}
        
    </div>
  )
}

export default Main