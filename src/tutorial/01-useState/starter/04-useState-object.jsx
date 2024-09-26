import { useState } from "react";
import { data2 } from "../../../data";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "john",
        age: 10,
        hobby: "flying kit",
    });

    const displayPerson = () => {
        setPerson({ id: 5, name: "peter", age: 54, hobby: "fishing" });
    };
    return (
        <div>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
            <h2>{person.hobby}</h2>
            <button type="button" className="btn" onClick={displayPerson}>
                Display Peter
            </button>
        </div>
    );
};

export default UseStateObject;
