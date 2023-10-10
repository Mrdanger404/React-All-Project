import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ref, set } from "firebase/database";
import { auth, database } from "./Database";
import { onAuthStateChanged } from "firebase/auth";

const UpdateDetails = () => {
  const [text, setText] = useState("");
  const {uid} = useParams();
  const navigateLogin = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!uid){
      alert("Unauthorize User")
      navigateLogin("/")
    }
    if(uid) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          set(ref(database,`AuthorizedData/${uid}`), {
            Text: text
          })
        }
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => {setText(e.target.value)}} value={text} placeholder="Enter something" />
        <button>Submit</button> 
      </form>
    </div>
  )
}

export default UpdateDetails