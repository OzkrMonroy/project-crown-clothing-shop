import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import Signin from '../../components/signin/signin.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignupPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin/>
      <SignUp/>
    </div> 
  );
}
 
export default SignInAndSignupPage;