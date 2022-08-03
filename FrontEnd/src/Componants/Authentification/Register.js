import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {



    const navigate = useNavigate()
    const onCancelClick = () => {
        navigate('/login')
    }
    const [AddUserData, setAddUserData] = useState({
        Name: '',
        Email: '',
        Password: '',
        Role: ''
    })

    const onAddUserChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const NewAddUserData = { ...AddUserData }
        NewAddUserData[fieldName] = fieldValue;
        setAddUserData(NewAddUserData);
    }
    const onAddUserSubmit = (event) => {
        event.preventDefault()   //to prevent data from showing in query
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: AddUserData.Email,
                password: AddUserData.Password,
                name: AddUserData.Name,
                role: AddUserData.Role
            })
        })
            .then(response => response.json())

    }


    return (

        <div className="register-page ">
            <div className="register-box">
                <div className="register-logo">
                    <a href="/#"><b>Project</b>Manager</a>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Register a New User</p>
                        <form>
                            <div className="input-group mb-3">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Full name"
                                    name="Name"
                                    onChange={onAddUserChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="Email"
                                    onChange={onAddUserChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="Password"
                                    onChange={onAddUserChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputStatus">Role</label>
                                <select
                                    id="Role"
                                    className="form-control custom-select"
                                    name="Role"
                                    onChange={onAddUserChange}>
                                    <option selected disabled>Select one</option>
                                    <option>Admin</option>
                                    <option>Project Manager</option>
                                    <option>Team Member</option>
                                    <option>Tester</option>
                                    <option>Customer Relationship Manager</option>
                                    <option>Client</option>

                                </select>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <button type="submit"
                                        className="btn btn-primary btn-block text-center"
                                        onClick={onAddUserSubmit}>Register</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="/#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" />
                                Sign up using Facebook
                            </a>
                            <a href="/#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" />
                                Sign up using Google+
                            </a>
                        </div>
                        <button onClick={onCancelClick} className="text-center btn btn-link ">I already have a membership</button>
                    </div>
                    {/* /.form-box */}
                </div>{/* /.card */}
            </div>
        </div>

    )
}

export default Register