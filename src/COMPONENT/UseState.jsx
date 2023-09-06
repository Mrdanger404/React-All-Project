import { useState } from "react";

function UseState() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }


    return ( 
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>increment</button>
        </>
     );
}

export default UseState;