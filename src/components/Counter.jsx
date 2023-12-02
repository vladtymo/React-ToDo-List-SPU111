import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { useState } from "react";
import { CounterContext } from "../contexts/counter.context";

function Counter() {

    // arr[0]; // value (count)
    // arr[1]; // setter function (setCount)

    // create varible with state hook
    //const [count, setCount] = useState(10); // 10 - default value

    // get content data
    const { count, increment, decrement, reset } = useContext(CounterContext);

    // ... logic
    //let count = 10;

    // const increment = () => {
    //     //++count;           // does not affect DOM
    //     setCount(count + 1); // affects DOM
    //     console.log(count);
    // }
    //const reset = () => setCount(0);

    return (
        <>
            <p>Counter: <strong>[{count == 0 ? "-" : count}]</strong> </p>
            <Button onClick={increment} color="primary" type='submit'>Increment</Button>
            <Button onClick={reset} color="primary" type='submit'>Reset</Button>
            {/* <button onClick={increment}>Increment</button> */}
            {/* <button onClick={reset}>Reset</button> */}
        </>
    )
}

export default Counter;