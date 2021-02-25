import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		userDisplayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { userDisplayName, email, password, confirmPassword } = userCredentials;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't mach");
			return;
		}

		signUpStart(email, password, { userDisplayName });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="userDisplayName"
					value={userDisplayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (email, password, additionalData) =>
		dispatch(signUpStart({ email, password, additionalData })),
});

export default connect(null, mapDispatchToProps)(SignUp);
