import { useParams } from "react-router-dom"
import useFindData from "../../CUSTOMHOOK/useFindData";
import { useEffect, useState } from "react";
import Header from "../../HOME/Header";

const Bike = () => {
  const {bike} = useParams();

  const {bikes} = useFindData();

  const [info, setInfo] = useState(null);

  useEffect(()=> {
    const data = bikes.filter((items) => items.productId === bike);
    if(data){
      setInfo(data[0])
    } else{
      setInfo(null)
    }
  }, [bike, bikes])

  console.log(info)

  return (
    <div>
        <Header />
            <div className="products">
            {info ? (
                <div className="product-info">
                    <p>Product ID: {info.productId}</p>
                    <p>product model : {info.productName}</p>
                </div>
            ) : (
                <div>Product not found</div>
            )}
            </div>
        </div>
  )
}

export default Bike