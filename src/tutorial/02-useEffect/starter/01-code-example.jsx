import { useState } from "react";

const CodeExample = () => {
    const [value, setValue] = useState(0);

    function triggerFunction() {
        alert("I will be triggered with every re-render");
    }
    // will be invoked with every re-render
    triggerFunction();

    return (
        <div>
            <h1>value : {value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>
                click me
            </button>
        </div>
    );
};
export default CodeExample;
