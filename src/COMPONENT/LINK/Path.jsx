import { BrowserRouter, Route , Routes} from "react-router-dom"
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import UpdateDetails from '../UpdateDetails'

const Path = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/SignUp" Component={SignUp} />
          <Route exact path="/" Component={SignIn}/>
          <Route exact path="/UpdateDetails/:uid" Component={UpdateDetails} />
        </Routes>
    </BrowserRouter>
  )
}

export default Path