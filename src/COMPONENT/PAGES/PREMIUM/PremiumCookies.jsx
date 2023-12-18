import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useRoutProtect from "../../CUSTOMHOOK/useRoutProtect";
import { auth, database } from "../../DATABASE/Config";
import { onValue, ref } from "firebase/database";


const PremiumCookies = () => {
  const {uid} = useParams();
  const loginNavigate = useNavigate();
  const [cookies, setCookies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchItems, setSearchItems] = useState([]);

  useRoutProtect(auth, uid, loginNavigate)

  useEffect(() => {
    const dbRef = ref(database, 'forum/premiumCookies');

    onValue(dbRef, (snapshot) => {
      const cookiesArray = [];
      snapshot.forEach((items) => {
        cookiesArray.push(items.val())
      });
      setCookies(cookiesArray)
    })
  },[])
  
  useEffect(() => {
    let matches = cookies.filter((items) => items.title.includes(search));
    setSearchItems(matches)
  },[cookies,search])
  
  return (
    <div className="h-screen">
      <div className="w-full flex items-center justify-center">
        <input type="text" value={search} onChange={(e) => {setSearch(e.target.value); }} placeholder="Search title" className="border border-black m-5 p-2 px-4 rounded-3xl " />
      </div>
        <div>
          {searchItems && searchItems.length>0 ? <div className="flex flex-wrap">
            {searchItems.map((data, index) => {
              const {name, title, comment, fileUrl} = data;
              return <div key={index} className="border rounded-xl p-4 m-2 flex flex-col w-full h-min">
                <p className="my-2">uploader : <span className="font-bold">{name}</span></p>
                <p className="my-2 break-words">title : {title}</p>
                <p className="my-2 break-words">Comment : <span className="font-semibold text-red-600">{comment}</span></p>
                <a href={fileUrl} className="bg-blue-700 my-2 px-2 py-1 text-center  hover:bg-orange-400 focus:bg-red-500 font-semibold rounded-3xl">Download file</a>
              </div>
            })}
          </div> : <div className="h-screen flex items-center justify-center">
            <div>
              <span className="font-bold text-3xl text-red-600">{search}</span>
              <span className="font-semibold text-xl"> Not found!</span>
            </div>
          </div>}
        </div>
    </div>
  )
}

export default PremiumCookies