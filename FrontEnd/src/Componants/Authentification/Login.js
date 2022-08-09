import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {


  let navigate = useNavigate()
  const [LoginData, setLoginData] = useState({

    LoginEmail: '',
    LoginPassword: '',

  })
  // eslint-disable-next-line no-unused-vars
  const [User, setUser] = useState({
    id: '',
    name: '',
    email: '',
    role: ''
  })
  const loadUser = (dataa) => {
    setUser({
      id: dataa.id,
      name: dataa.name,
      email: dataa.email,
      role: dataa.role
    })
  }


  
  const onRegisterNewUserChange = () => {
    navigate('/register')
  }
  const onLoginChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const NewLoginData = { ...LoginData }
    NewLoginData[fieldName] = fieldValue;
    setLoginData(NewLoginData);
  }

  const saveAuthTokenInSessions = (token) => {
    window.sessionStorage.setItem('token', token);
  }

  const onLoginSubmit = (event) => {
    event.preventDefault()   //to prevent data from showing in query
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: LoginData.LoginEmail,
        password: LoginData.LoginPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.success === "true") {
          saveAuthTokenInSessions(data.token)
          loadUser(data)
          navigate('/projects')

        }

      })
      .catch(console.log)

  }

  return (
    <div className="login-page ">
      <div className="login-box ">
        <div className="login-logo">

          <a href="/#"><b>Project</b> Manager</a>

        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <h5 className="login-box-msg">Sign In To Start Your Session</h5>


            <form >
              <div className="input-group mb-3">
                <input type="email"
                  className="form-control"
                  placeholder="Email"
                  name="LoginEmail"
                  onChange={onLoginChange} />
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
                  name="LoginPassword"
                  onChange={onLoginChange} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <button type="submit"
                    className="btn btn-primary btn-block text-center " style={{ width: "40%" }}
                    onClick={onLoginSubmit}>Sign In</button>
                </div>
              </div>
              <div className="row">
                <div className="col-8">

                </div>
                {/* /.col */}

                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <button className="btn btn-block btn-info">
                <i className="fab  mr-2" /> I Forgot My Password
              </button>
              <button onClick={onRegisterNewUserChange} className="btn btn-block btn-danger">
                <i className="fab  mr-2" /> Register a New Membership
              </button>
            </div>

            {/* <p className="mb-1">
              <button className="text-center btn btn-link">I forgot my password</button>
            </p>
            <p className="mb-0">
              <button onClick={onRegisterNewUserChange} className="text-center btn btn-link">Register a New Membership</button>
            </p> */}
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>

  )
}

export default Login