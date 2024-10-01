import { useState } from "react";

const ShortCircuitOverview = () => {
    const [text, setText] = useState("");
    const [name, setName] = useState("Emile");

    {
        if (text || name) {
            alert("truth");
        } else {
            alert("false");
        }
    }
    {
        if (name && text) {
            alert("truth");
        } else {
            alert("false");
        }
    }

    return <h2>short circuit overview</h2>;
};
export default ShortCircuitOverview;
