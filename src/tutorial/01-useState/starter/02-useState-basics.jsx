import { useState } from "react";

const UseStateBasics = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <button type="button" className="btn" onClick={handleClick}>
                Increase Count
            </button>
            <h2>{count}</h2>
        </>
    );
};

export default UseStateBasics;
