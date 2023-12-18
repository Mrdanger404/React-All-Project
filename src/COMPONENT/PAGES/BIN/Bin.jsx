import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { auth, database } from "../../DATABASE/Config";
import useRoutProtect from "../../CUSTOMHOOK/useRoutProtect";


const Bin = () => {
    const {uid} = useParams()
    const [bins, setBins] = useState([]);
    const [search, setSearch] = useState('');
    const [searchItems, setSearchItems] = useState([]);

    const loginNavigate = useNavigate()

    useRoutProtect(auth, uid, loginNavigate)

    useEffect(() => {
        const dbRef = ref(database, "forum/bins")

        onValue(dbRef, (snapshot) => {
            const binArray = [];

            snapshot.forEach((items) => {
                binArray.push(items.val())
            })

            setBins(binArray)
        })
    },[])
    useEffect(() => {
      let matches = bins.filter((data) => data.subject.toLowerCase().includes(search.toLowerCase()));
      setSearchItems(matches)
    },[bins,search])
  return (
    <div className="h-screen">
    <div className="w-full flex items-center justify-center">
      <input type="text" placeholder="Search subject " value={search} onChange={(e) => setSearch(e.target.value)} className="border border-black m-5 p-2 px-4 rounded-3xl " />
    </div>
      {searchItems && searchItems.length>0 ? <div className="flex flex-wrap">
        {searchItems.map((data, index) => {
          const {name, subject, bin, date, country, comment, currentDate} = data;
          return <div key={index} className="group m-2 p-2 border border-black w-full">
              <p>Posted by : <span className="font-bold">{name}</span></p>
              <p>Subject : <span className="text-red-600 font-semibold">{subject}</span></p>
              <p>Bin : {bin}</p>
              <p>Date : {date}</p>
              <p>Country : {country}</p>
              <p>Comment : <span className="text-red-600 break-words">{comment}</span></p>
              <p>Create at : {currentDate}</p>
              
          </div>
        })}
      </div> : <div>
        <div className="h-screen flex items-center justify-center">
          <span className="font-bold text-3xl text-red-600">{search} </span>
          <span className="font-semibold text-xl"> Not found! </span>
        </div>
      </div>}
    </div>
  )
}

export default Bin