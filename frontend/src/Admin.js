import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import User from "./Api";

const Admin = () => {

    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUsers() {
            let users = await User.getUsers();

            setUsers(users);
            setIsLoading(false);
        }
        getUsers();
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div>
            <h1>{users.length === 0 ? "No Users To List." : "List Of Users"}</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/${user.id}`}>
                            {user.firstName} {user.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Admin;