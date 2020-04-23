import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import auth from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    password: Joi.string().required().label("Password"),
    email: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    const response = await auth.login(this.state.data);
    console.log(response);
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
