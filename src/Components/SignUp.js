import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

//helper functions
import validate from "./validate";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors , setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate (data , 'signUp') ) ;
  } , [data , touched])

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
          { errors.name && touched.name && <span>{errors.name}</span> }
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
          { errors.email && touched.email && <span>{errors.email}</span> }
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
          { errors.password && touched.password && <span>{errors.password}</span> }
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
          { errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span> }
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
          { errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span> }
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
