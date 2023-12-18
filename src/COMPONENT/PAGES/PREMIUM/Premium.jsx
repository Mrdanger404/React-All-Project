import { NavLink, useParams } from "react-router-dom"


const Premium = () => {
    const {uid} = useParams()
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <NavLink to={`/premium/cookies/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Premium cookies</NavLink>
        <NavLink to={`/premium/accounts/${uid}`} className="bg-blue-600 w-[250px] m-2 p-3 text-center rounded-2xl font-bold focus:bg-rose-600 hover:border hover:bg-rose-700">Premium accounts</NavLink>
    </div>
  )
}

export default Premium