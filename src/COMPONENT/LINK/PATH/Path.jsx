import Honda from "../../CATEGORIES/BIKE/Honda"
import Pulsure from "../../CATEGORIES/BIKE/Pulsure"
import Hp from "../../CATEGORIES/LAPTOP/Hp"
import Msi from "../../CATEGORIES/LAPTOP/Msi"
import Iphone from "../../CATEGORIES/MOBILE/Iphone"
import Itel from "../../CATEGORIES/MOBILE/Itel"
import Cart from "../../USER/CART/Cart"
import User from "../../USER/USERPROFILE/User"
import Home from "../../HOME"
import Bike from "../../CATEGORIES/BIKE/Bike"
import Laptop from "../../CATEGORIES/LAPTOP/Laptop"
import Mobile from "../../CATEGORIES/MOBILE/Mobile"
import Login from "../../AUTHENTICATION/Login"
import SignUp from "../../AUTHENTICATION/SignUp"
import Product from "../../Product"

import Search from "../../Search"

import Dashboard from "../../../ADMIN/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"



const Path = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/honda" Component={Honda} />
            <Route exact path="/pulsure" Component={Pulsure} />
            <Route exact path="/hp" Component={Hp} />
            <Route exact path="/msi" Component={Msi} />
            <Route exact path="/Iphone" Component={Iphone} />
            <Route exact path="/itel" Component={Itel} />
            <Route exact path="/bike/:bike" Component={Bike} />
            <Route exact path="/laptop/:laptop" Component={Laptop} />
            <Route exact path="/mobile/:mobile" Component={Mobile} />
            <Route exact path="/cart/:uid" Component={Cart} />
            <Route exact path="/user/:uid" Component={User} />
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={SignUp} />
            <Route exact path="/dashboard" Component={Dashboard} />
            <Route exact path="/product/:productId" Component={Product} />
            <Route exact path="/search/:productModel" Component={Search} />
        </Routes>
    </BrowserRouter>
  )
}

export default Path