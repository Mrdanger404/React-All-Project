import { useState } from "react"


const Toggle = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <div>
        {toggle && (
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime dolorum, totam illum dicta officiis? Maxime cumque, harum debitis nihil at laudantium nemo? Tempore odio cum hic ipsa distinctio dolorum.
        </p>
        )}
        <button onClick={()=>{setToggle(!toggle)}}>
            {toggle ? "Hide" : "Show"}
        </button>
        
    </div>
  )
}

export default Toggle