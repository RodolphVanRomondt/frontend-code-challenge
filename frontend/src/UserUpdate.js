import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./UserUpdate.css";
import User from "./Api";
import { useNavigate, useParams } from "react-router-dom";


const UserUpdate = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState(null);
    const history = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        async function getUser() {
            let user = await User.getUser(id);

            setFormData(user);
            setIsLoading(false);
        };
        getUser();
    }, []);

    if (isLoading) return <p>Loading &hellip;</p>;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await User.putUser(formData);
        history(`/admin`);
    }

    return (
        <div className="UserUpdate">
            <h1>Update Information</h1>
            <Form className="UserUpdate-Form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="user.firstName"
                        onChange={handleChange}
                        className="form-control"
                    >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Last Name"
                        onChange={handleChange}
                        className="form-control"
                    >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className="form-control"
                    >
                    </Input>
                </FormGroup>
                <Button>Update</Button>
                <Button className="left" onClick={e => history("/admin")}>Cancel</Button>
            </Form>
        </div>
    )
}


export default UserUpdate;