import { useState } from "react";


function UpdateState() {
    const [count, setCount] = useState(0)

    const handler = () =>{
        setCount((prev) => prev +1);
        setCount((prev) => prev +1);
        setCount((prev) => prev +1);
        setCount((prev) => prev +1);
    }
    return ( 
        <>
            <h1>count : {count}</h1>
            <button onClick={handler}>increase</button>
        </>
     );
}

export default UpdateState;