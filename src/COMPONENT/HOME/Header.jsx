import { NavLink, useNavigate } from "react-router-dom";
import logo from "../IMAGE/logo.jpg";
import "../CSS/HOME/Header.css";


import { auth, database } from "../../ADMIN/Data";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { ref, child, get } from "firebase/database";
import useFindData from "../CUSTOMHOOK/useFindData";

const Header = ({cart}) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState();
  const [uid, setUid] = useState("");
  const {bikes, mobiles, laptops} = useFindData();
  const useSearchRef = useRef();
  const homeNavigate = useNavigate();
  const searchNavigate = useNavigate();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if (authUser) {

        const uid = authUser.uid;
        setUid(uid);

        const dbRef = ref(database)
        get(child(dbRef, `users/${authUser.uid}`))
        .then((snapshot)=> {
          const DataArray = []
          snapshot.forEach(childSnapshot => {
            DataArray.push(childSnapshot.val())
          })
          setUserName(DataArray[1])
        })
        setUser(true)
      } else {
        setUser(null)
      }

    });
    return () => unsubscribe()
  },[]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert(`${userName} signing out`)
      homeNavigate("/");
      window.location.reload();
    } catch(error) {
      alert(`${userName} error signing Out`);
    }
  }


  const handleSearch = () => {
    const mergeData = bikes.concat(laptops,mobiles);
    const Search = useSearchRef.current.value;

    const data = mergeData.find((item) => item.productName.toLowerCase() == Search.toLowerCase());
    if (data) {
      searchNavigate(`/search/${Search}`)
    } else {
      alert(`${Search} is not available`)
    }
  }
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="search hare..."
            className="inputSearch"
            ref={useSearchRef}
          />
          <button onClick={handleSearch} >Search</button>
        </div>
        <div className="authBtn">
          {user ? (
            <>
            <p>{userName}</p>
            <button onClick={handleSignOut} >SignOut</button>
            </>
          ) : (
            <>
            <button>
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </button>
          <button>
            <NavLink to="/signup" className="link">
              SignUp
            </NavLink>
          </button>
            </>
          )}
        </div>
      </div>
      <div className="category">
        <div className="menu">
          <ul>
            <li className="active">
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <a href="#">Bike</a>
              <div className="sub-menu-1">
                <ul>
                  <li>
                    <NavLink to="/honda" className="link">
                      Honda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pulsure" className="link">
                      Pulsure
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Laptop</a>
              <div className="sub-menu-1">
                <ul>
                  <li>
                    <NavLink to="/msi" className="link">
                      Msi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/hp" className="link">
                      Hp
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Mobile</a>
              <div className="sub-menu-1">
                <ul>
                  <li>
                    <NavLink to="/iphone" className="link">
                      Iphone
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/itel" className="link">
                      Itel
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            {uid && <li>
              <NavLink to={`/cart/${uid}`} className="link">
                Cart {cart}
              </NavLink>
            </li>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
