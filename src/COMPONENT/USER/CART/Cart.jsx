import '../../CSS/CART/Cart.css'
import Header from '../../HOME/Header'
import img from '../../IMAGE/logo.jpg'

const Cart = () => {
  return (
    <>
    <Header />
      <div className='cart-container'>
        <div className='cart-card'>
          <img src={img} alt='img' />
          <div className='cart-details'>
            <h3>Model</h3>
            <p>tk</p>
          </div>
          <button>Delete</button>
          <button>Confirm</button>
        </div>
      </div>
    </>
  )
}

export default Cart