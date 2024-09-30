import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // Fetches data after component mounts
        const getUsers = async () => {
            try {
                const response = await fetch(url);
                const users = await response.json();
                console.log(users);

                setUsers(users); // Updates state with fetched users
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
        // Runs only when the values in the array change
    }, []); // Empty dependency array ensures this runs only once on mount
    return (
        <section>
            <h3>github users</h3>
            <ul className="users">
                {users.map((user) => {
                    const { id, avatar_url, login, html_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} className="img" />
                            <div>
                                <h5>{login}</h5>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default FetchData;
