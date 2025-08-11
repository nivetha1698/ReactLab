import { useState } from "react"

export default function StateExample() {
    const[count, setCount] = useState(0);
    console.log('Components rendered');

    const handleClick= () => {
      setCount(count+1);
    }

    function decrease() {
      setCount(count-1);
    }

    return <>
        <h2>This is the state example</h2>
        <h3>Counter {count}</h3>
        <button onClick={handleClick} className="bg-color">Click</button>
        <button onClick={decrease}>Decrease</button>
    </>
}