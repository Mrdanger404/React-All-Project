import { useNavigate, useParams } from 'react-router-dom'
import './CSS/PRODUCTPAGE/Initial.css'
import Header from './HOME/Header'
import useFindData from './CUSTOMHOOK/useFindData'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, database } from '../ADMIN/Data'
import { set, ref } from 'firebase/database'

const Search = () => {

    const [info, setInfo] = useState([])
    const {bikes, laptops, mobiles} = useFindData();
    const {productModel} = useParams();

    const detailsNavigate = useNavigate();
 
    useEffect(()=>{
        const mergeData = bikes.concat(laptops,mobiles);
        const data = mergeData.filter((item) => item.productName.toLowerCase() === productModel);

        setInfo(data);
    },[bikes, laptops, mobiles, productModel]);

    const handleCart = (products) => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if(authUser) {
                set(ref(database, `cart/${authUser.uid}/${products.productId}`), {
                    productName : products.productName,
                    product: products.product,
                    productDetails: products.productDetails,
                    productImage: products.productImage,
                    productId: products.productId,
                    productPrice: products.productPrice
                })
                .then(()=>{
                    alert(`${products.productName} cart is added`)
                })
            } else {
                alert("If you are not logged in then logged in and try again")
            }
        })

        return () => unsubscribe()
    }
  return (
    <>
    <Header />
    {info ? (
  info.map((item, index) => {
    const {productId, productImage, productName, productPrice} = item;
    return <div className='products' key={index}>
        <div className='container'>
            <img src={productImage} alt='image not found' />
            <div className='content: '>
                <div className='details'>
                    <h3>Model : {productName}</h3>
                    <p>Price : {productPrice}</p>
                </div>
                <div className='button'>
                    <button onClick={()=> detailsNavigate(`/product/${productId}`)}>Details</button>
                    <button onClick={() => handleCart(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    })
) : (
  <h1 className='products'>Loading</h1>
)}  
    </>
  )
}

export default Search