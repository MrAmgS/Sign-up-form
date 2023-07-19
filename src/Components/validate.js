const validate = (data, type) => {
  const errors = {};
  if (type === "signUp") {
    if (!data.name.trim()) {
      errors.name = "Username is required";
    } else {
      delete errors.name;
    }

    if (!data.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "email is invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "password is required";
    } else if (data.password.length < 6) {
      errors.password = "password is too short";
    } else {
        delete errors.password;
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = 'password confirm is required'
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword ="confirm and password are not same" ;
    } else {
        delete errors.confirmPassword;
    }

    if ( !data.isAccepted) {
        errors.isAccepted = " you should read and accept the terms"
    } else {
        delete errors.isAccepted;
    }
  } else if ( type === 'login') {
    
      if (!data.email) {
        errors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "email is invalid";
      } else {
        delete errors.email;
      }

      if (!data.password) {
        errors.password = "password is required";
      } else if (data.password.length < 6) {
        errors.password = "password is too short";
      } else {
          delete errors.password;
      }
  }

  return errors;
};


export default validate;