import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
    // set data as default value
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople(people.filter((person) => person.id !== id));
    };

    const clearAll = () => {
        setPeople([]);
    };
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;

                return (
                    <ul key={id}>
                        <li>
                            {name}
                            {"   "}
                            <button
                                type="button"
                                className="btn"
                                onClick={() => {
                                    removeItem(id);
                                }}
                            >
                                Remove
                            </button>
                        </li>
                    </ul>
                );
            })}
            <button type="button" className="btn" onClick={clearAll}>
                Clear List
            </button>
        </>
    );
};

export default UseStateArray;
