import { useState } from "react";

const ShortCircuitExamples = () => {
    // falsy
    const [text, setText] = useState("");
    // truthy
    const [name, setName] = useState("susan");
    const [user, setUser] = useState({ name: "john" });
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            <h2>{text || <SomeComponent name={name} />}</h2>
            <h1>Ternary Operator</h1>
            <button className="btn">{isEditing ? "ADD" : "CLEAR"}</button>
        </div>
    );
};

export default ShortCircuitExamples;

export const SomeComponent = ({ name }) => {
    return (
        <div>
            <h2>Some Component</h2>
            <h3>{name}</h3>
        </div>
    );
};
