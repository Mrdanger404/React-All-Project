import '../../CSS/PRODUCTPAGE/Initial.css'
import Header from '../../HOME/Header'
import useFindData from '../../CUSTOMHOOK/useFindData'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Mobile = () => {
  const {mobile} = useParams();

  const {mobiles} = useFindData();

  const [info, setInfo] = useState();
  useEffect(()=> {
    const data = mobiles.filter((items) => items.productId === mobile);
    if(data) {
      setInfo(data[0])
    } else{
      setInfo(null)
    }
  }, [mobile, mobiles])

  console.log(info)
  return (
    <>
    <Header />
      <div className='products'>
        {info ? (
          <div className='product-info'>
            <p>Product Id : {info.productId}</p>
            <p>Product model : {info.productName}</p>
          </div>
        ) : (<h1>Data is loading...</h1>)}
    </div>
    </>
  )
}

export default Mobile