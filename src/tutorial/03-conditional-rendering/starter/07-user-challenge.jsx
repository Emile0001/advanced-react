import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UserChallenge = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const users = await response.json();
                setUsers(users);
                console.log(users);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchUsers();
    }, []);

    const login = () => {
        setUsers(users);
    };
    const logout = () => {
        setUsers(null);
    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>error...</h2>;
    }

    return (
        <section className="container">
            <h1>user challenge</h1>
            {users ? (
                <div>
                    <h4>Hello there, {users.name}</h4>
                    <button type="button" className="btn" onClick={logout}>
                        logout
                    </button>
                </div>
            ) : (
                <div>
                    <h4>please login</h4>
                    <button type="button" className="btn" onClick={login}>
                        logout
                    </button>
                </div>
            )}
        </section>
    );
};

export default UserChallenge;
