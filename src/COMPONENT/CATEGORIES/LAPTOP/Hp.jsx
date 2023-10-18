import '../../CSS/PRODUCTPAGE/Initial.css'
import img from '../../IMAGE/logo.jpg'
import Header from '../../HOME/Header'

const Hp = () => {
  return (
    <>
    <Header />
      <div className='products'>
        <div className='container'>
            <img src={img} alt='img' />
            <div className='content'>
                <div className='details'>
                    <h3>Model</h3>
                    <p>tk</p>
                </div>
                <div className='button'>
                    <button>Details</button>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hp