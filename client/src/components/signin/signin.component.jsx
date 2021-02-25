import React, { useState } from "react";
import { connect } from "react-redux";
import {
	emailSignInStart,
	googleSignInStart,
} from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.scss";

const Signin = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});
	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Signin with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					required
					handleChange={handleChange}
					label="Email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					required
					handleChange={handleChange}
					label="Password"
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Signin);
