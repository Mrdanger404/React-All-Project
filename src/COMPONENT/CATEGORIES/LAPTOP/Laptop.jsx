import '../../CSS/PRODUCTPAGE/Initial.css'
import Header from '../../HOME/Header'
import { useParams } from 'react-router-dom'
import useFindData from '../../CUSTOMHOOK/useFindData'
import { useEffect, useState } from 'react'


const Laptop = () => {
  const {laptop} = useParams();

  const {laptops} = useFindData();

  const [info, setInfo] = useState();

  useEffect(() => {
    const data = laptops.filter((items) => items.productId === laptop);
    if(data) {
      setInfo(data[0])
    } else {
      setInfo(null)
    }
  }, [laptop, laptops])

  console.log(info)
  return (
    <>
    <Header />
      <div className='products'>
        {info ? (
          <div className='product-info'>
            <p>product Id : {info.product}</p>
            <p>Product model : {info.productName}</p>
          </div>
        ) : (<h1>Details is loading...</h1>)}
    </div>
    </>
  )
}

export default Laptop