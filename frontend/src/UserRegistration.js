import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "./UserRegistration.css";
import User from "./Api";
import { useNavigate } from "react-router-dom";


const UserRegistration = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    const history = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        async function registration() {
            await User.postUser(formData);
        }
        registration();
        history(`/admin`);
    }

    return (
        <div className="UserRegistration">
            <h1>Enter Your Information</h1>
            <Form className="UserRegistration-Form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="First Name"
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
                <Button>Register</Button>
                <Button className="left" onClick={e => history("/")}>Cancel</Button>
            </Form>
        </div>
    )
}


export default UserRegistration;