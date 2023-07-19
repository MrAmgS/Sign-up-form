import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </div>
        <div>
          <label>Conform Password</label>
          <input
            type="password"
            placeholder="Enter your password again"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </div>
        <div>
          <div>
            <label>I accept terms of privacy policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
        </div>
        <div>
            <Link to='/login' >Log in</Link>
            <button type="submit" >Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
