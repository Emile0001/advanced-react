import { useState } from "react";

const UseStateGotcha = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h2>{count}</h2>
            <button className="btn" type="button" onClick={increaseCount}>
                Increase Count
            </button>
        </>
    );
};

export default UseStateGotcha;
