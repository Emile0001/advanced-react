import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url);
                const user = await response.json();
                setUser(user);
                console.log(user);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchUser();
    }, []);

    if (isLoading) {
        return <h2>Loading... Fetching Data </h2>;
    }
    if (isError) {
        return <h2>Error! </h2>;
    }
    return (
        <div>
            <img
                src={user.avatar_url}
                style={{ width: "150px", borderRadius: "25px" }}
            />
            <h2>{user.name}</h2>
            <h4>works at {user.company}</h4>
            <p>{user.bio}</p>
        </div>
    );
};
export default MultipleReturnsFetchData;
