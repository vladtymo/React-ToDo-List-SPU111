import { useState } from "react";

function Counter() {

    // arr[0]; // value (count)
    // arr[1]; // setter function (setCount)

    // create varible with state hook
    const [count, setCount] = useState(10); // 10 - default value

    // ... logic
    //let count = 10;

    const increment = () => {
        //++count;           // does not affect DOM
        setCount(count + 1); // affects DOM
        console.log(count);
    }
    const reset = () => setCount(0);

    return (
        <>
            <p>Counter: [{count == 0 ? "-" : count}]</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter;