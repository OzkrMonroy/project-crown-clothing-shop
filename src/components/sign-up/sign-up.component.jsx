import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      userDisplayName: "",
      userEmail: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };
  
  handleSubmit = async e => {
    e.preventDefault();

    const { userDisplayName, userEmail, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if(password !== confirmPassword){
      alert("Passwords don't mach");
      return
    }

    signUpStart(userEmail, password, {userDisplayName});
  };

  render() {
    const { userDisplayName, userEmail, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="userDisplayName"
            value={userDisplayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="userEmail"
            value={userEmail}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, additionalData) => dispatch(signUpStart({email, password, additionalData}))
})

export default connect(null, mapDispatchToProps)(SignUp);
