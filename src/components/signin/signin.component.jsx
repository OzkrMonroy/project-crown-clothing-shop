import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustommButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.scss";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Signin with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustommButton type="submit">Sign in</CustommButton>
            <CustommButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustommButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
