import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"


const useRoutProtect = (auth, uid, loginNavigate) => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if(!authUser || (authUser?.uid && authUser?.uid !== uid) ) {
                loginNavigate('/');
            }
        })
        return () => unsubscribe()
    },[auth, uid, loginNavigate])
  
}

export default useRoutProtect