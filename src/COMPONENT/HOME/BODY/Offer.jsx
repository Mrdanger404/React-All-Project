import '../../CSS/HOME/BODY/Offer.css'
import { child, ref, get } from 'firebase/database'
import { database } from '../../../ADMIN/Data'
import { useEffect, useState } from 'react'
const Offer = () => {
  const [offerImage, setOfferImage] = useState([]);

  const lastIndex = offerImage.length;
  const [currentIndex, setCurrentIndex] = useState(lastIndex)

  useEffect(()=>{
    const dbRef = ref(database);
    get(child(dbRef, "offer/"))
    .then((snapshot) => {
      const dataArray = []
      snapshot.forEach((childSnapshot) => {
        dataArray.push(childSnapshot.val());
      });
      setOfferImage(dataArray)
    });

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === 0 ) {
          return lastIndex -1;
        } else {
          return prevIndex -1
        }
      })
    }, 4000);

    return () => clearInterval(timer)
  },[lastIndex]);

  const currentImage = offerImage[currentIndex]

  return (
    <div className='offer-container'>
      <div className='offer'>
        <img
          src={currentImage ? currentImage.offerImageUrl : ''}
          alt="missing image"
        />
  </div>
    </div>
  )
}

export default Offer