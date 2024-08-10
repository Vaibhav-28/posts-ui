import Logo from "../assets/Logo.png";
import SignInComponent from "../components/SignInComponent";

const SignIn = () => {
  return (
    <div className="h-lvh flex flex-col justify-center items-center align-middle space-y-16 font-inter">
      <img width="40px" height="40px" src={Logo} alt="logo" />
      <SignInComponent />
    </div>
  );
};

export default SignIn;
