import React from "react";
import "./sign-In.style.scss";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/sign-up/sign-up.component";
const SignInup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInup;
