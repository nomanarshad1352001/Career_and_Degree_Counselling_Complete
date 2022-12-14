import React, { useState } from "react";
import FormInput from "./FormInput";
import classes from "./signup.module.css";
import {useNavigate} from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "User Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required:true
    },
    {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
            "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
        required:true
    },
    {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        label: "Confirm Password",
        pattern: values.password,
        required:true
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUserSignUpData(values);
    setValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/login")
  };
  return (
    <div  className={classes.signup}>
      <div className={classes.signup_content}>
            <h1>Signup for Free</h1>
        <div className={classes.innercont}>
        <div className={classes.page_body}>
          <h2>Free account</h2>
          <p>Create Free Account, Enter Your Previous Degree Record, and Check for Degree, for free.</p>
          
          <h2>Your Degree platform</h2>
          <p>A platform for Degree, with College Asistance &amp; instant Chosing of Degree, for Learning and Job.</p>
          <hr></hr>
          <h2>Your College platform</h2>
          <p>See Various Colleges Information and Degree They Offers.  </p>
        </div>
        <div className={classes.login}>
          <form onSubmit={handleSubmit} className={classes.form}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div>
              <button className={classes.loginBtn}>Submit</button>
            </div>
          </form>
          <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse.credential);
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded);
                  navigate("/login")
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                />     
          </div>
        </div>
      </div>
      </div>
  );
};

export default SignUp;
