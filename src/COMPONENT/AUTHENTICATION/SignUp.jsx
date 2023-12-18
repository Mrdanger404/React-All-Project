import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth, database, storage } from "../DATABASE/Config";
import { ref, set } from "firebase/database";
import {getDownloadURL, ref as stRef, uploadBytesResumable} from 'firebase/storage'
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";


const SignUp = () => {

  const homeNavigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [uid, setUid] = useState('')
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    picture: null,
  });
  const [isChecked, setIsChecked] = useState(false)

  
  const signup = async (e) => {
    e.preventDefault();

      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)

      const userId = userCredential.user;



      try{
        if(userId.uid){
          const userImage = stRef(storage, `user/${userId.uid}`);
          setUid(userId.uid)
          try{
            if(user.picture){
              const uploadTask = uploadBytesResumable(userImage, user.picture);

              uploadTask.on('state_changed',
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setProgress(progress)
                }
              );
              await uploadTask;
              const mediaUrl = await getDownloadURL(uploadTask.snapshot.ref);

              if(mediaUrl) {
                await set(ref(database, `userInfo/${userId.uid}`),{
                  name: user.name,
                  phone: user.phone,
                  email: user.email,
                  password: user.password,
                  uid: userId.uid,
                  picture: mediaUrl
                })
              }
            }
            
          } catch(error) {
            console.log(error)
          }
        }

      } catch(error){
        console.log(error)
      }
  }

  useEffect(() => {
    if( progress === 100){
      homeNavigate(`/${uid}`)
    }
  },[homeNavigate,progress,uid])
  return (
    <div className="h-screen bg-slate-600 flex items-center justify-center">
        {progress >= 1 && progress <= 100 ? <BounceLoader color="#36d7b7" /> : <div className="w-[250px] p-5 bg-orange-400 rounded-3xl">
        <form className="flex flex-col" onSubmit={signup}>
          <input type="text" required placeholder="Enter your Full name" onChange={(e) => setUser({...user, name: e.target.value})} className="h-10 my-2 p-5 rounded-3xl" />
          <input type="tel" required placeholder="Enter Your Phone number" onChange={(e) => setUser({...user, phone: e.target.value})} className="h-10 my-2 p-5 rounded-3xl" />
          <input type="email" required placeholder="Enter your Email address" onChange={(e) => setUser({...user, email: e.target.value})} className="h-10 my-2 p-5 rounded-3xl" />
          <input type="password" required placeholder="Enter your Password" onChange={(e) => setUser({...user, password: e.target.value})} className="h-10 my-2 p-5 rounded-3xl" />
          <label>Choose your Picture</label>
          <input type="file" required className="h-10 my-2" accept="image/*" onChange={(e) => setUser({...user, picture: e.target.files[0]})} />
          <input type="checkbox" name="check" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
          <label>We are not responsible if you use it for illegal purposes</label>
          <button type="submit" disabled={!isChecked} className={`h-10 my-2 rounded-3xl bg-black text-white font-bold transition ${isChecked ? 'hover:bg-green-700 hover:shadow-2xl duration-500' : 'cursor-not-allowed'}`}>SignUp</button>
        </form>
      </div>}
    </div>
  )
}

export default SignUp