import React, { useState, useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import "./Profile.css";
import User from "./Api";

const Profile = () => {

    const { id } = useParams();
    const history = useNavigate();

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUser() {
            let user = await User.getUser(id);

            setUser(user);
            setIsLoading(false);
        }
        getUser();
    }, []);

    const handleDelete = () => {
        async function deleteUser() {
            await User.deleteUser(id);
        }
        deleteUser();
        history("/admin");
    }

    const handleCancel = () => {
        history("/admin");
    }

    if(isLoading) return <p>Loading &hellip;</p>;
    if(!user) return <Navigate to="/" />;

    return (
        <div className="Profile">
            <h2>User Profile</h2>
            <div className="Profile-Info">
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Status: {user.state}</p>
            </div>
            <div className="Profile-Button">
                <button type="button" className="btn btn-primary mr-5" onClick={e => history(`/update/${id}`)}>Update</button>
                <button type="button" className="btn btn-secondary mr-5" onClick={handleCancel}>Go Back</button>
                <button type="button" className="btn btn-outline-danger mr-5" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Profile;