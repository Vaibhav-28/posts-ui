import React, { useState } from "react";
import eye from "../assets/eye.png";
import { useNavigate } from "react-router-dom";

interface SignInComponentProps {
  onSignUpOpen?: () => void;
  onClose?: () => void;
}

const SignInComponent: React.FC<SignInComponentProps> = ({
  onSignUpOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleLogin = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/posts");
    }
  };
  return (
    <div className="w-full max-w-[490px] px-4">
      <div className="rounded-md bg-gradient-to-br from-[#969696] to-[#343434] p-0.5">
        <div className="bg-[#27292D] flex flex-col items-center rounded-md px-6 py-8">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[#6B6C70] text-sm font-medium">
              WELCOME BACK
            </div>
            <div className="text-white mt-1.5 text-lg font-medium">
              Log into your account
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full max-w-[420px] mt-10">
            <div className="text-[#C5C7CA] text-sm">Email or Username</div>
            <div className="rounded border-2 border-[#35373B] px-3 py-2.5 w-full mt-2">
              <input
                type="text"
                className="bg-[#27292D] w-full placeholder-[#7F8084] text-[#C5C7CA]  text-base focus:outline-none"
                placeholder="Enter your email or username"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full max-w-[420px] mt-3">
            <div className="flex justify-between items-center w-full">
              <div className="text-[#C5C7CA] text-sm">Password</div>
              <div className="text-[#C5C7CA] text-xs cursor-pointer">
                Forgot password?
              </div>
            </div>

            <div className="rounded border-2 flex border-[#35373B] px-3 py-2.5 w-full mt-2">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-[#27292D] w-full placeholder-[#7F8084] text-[#C5C7CA] focus:outline-none text-base"
                placeholder="Enter your password"
              />
              <img
                onClick={togglePassword}
                src={eye}
                width="24px"
                height="24px"
                alt="eye"
              />
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="mt-5 w-full bg-[#4A96FF] rounded py-2 text-white"
          >
            Login now
          </button>
          <div
            onClick={onSignUpOpen}
            className="text-[#7F8084] text-sm w-full mt-2 cursor-pointer"
          >
            Not registered yet?{" "}
            <span className="text-[#C5C7CA]">Register →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
