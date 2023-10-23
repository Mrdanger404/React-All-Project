import { ref, set } from "firebase/database"
import { database } from "../../ADMIN/Data"




const addCart = (authUser, items) => {


  if(authUser) {
    set(ref(database, `cart/${authUser.uid}/${items.productId}`), {
        productName: items.productName,
        product: items.product,
        productDetails: items.productDetails,
        productImage: items.productImage,
        productId: items.productId,
        productPrice: items.productPrice,
        productBrand: items.productBrand
    }).then(() => {
        alert(`${items.productName} is added to cart`);
        
    });
  } else {
    alert('please sign in and try again')
  }
}

export default addCart