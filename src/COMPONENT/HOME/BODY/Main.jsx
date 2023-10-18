import { Link } from 'react-router-dom'
import '../../CSS/PRODUCTPAGE/Initial.css'
import { database } from '../../../ADMIN/Data'
import { ref, child, get, set } from 'firebase/database'
import { useState,useEffect } from 'react'



const Main = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [mobiles, setMobiles] = useState([]);


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
      setCombinedData(mergedData)
    });

  },[bikes, laptops, mobiles])

  const handleCart = (products) => {




      set(ref(database, `cart/${products.productId}`), {
        productName : products.productName,
        product: products.product,
        productDetails: products.productDetails,
        productImage: products.productImage,
        productId: products.productId,
        productPrice: products.productPrice
      })
    
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
                    <Link to={`product/${productId}`}>Details</Link>
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