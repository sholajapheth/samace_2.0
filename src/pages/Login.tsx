import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import logo from "../assets/svgs/logo.svg";
import { useEffect, useState } from "react";
import { logIn, resetPassword } from "../store/slices/auth/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch<any>();
  const { loading, isLoggedIn } = useSelector((state: any) => state.login);
  const navigate = useNavigate();

  const [forgotPassword, setForgotPassword] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (e: any) => {
    if (forgotPassword !== true) {
      if (email === "" || password === "") {
        alert("Please fill all the fields");
      } else {
        e.preventDefault();
        dispatch(logIn({ email, password }));
      }
    }else{
      if (email.length !== 0) {
        dispatch(resetPassword(email));
      }
    }
  };


  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="h-screen w-full">
      {loading ? (
       <Loading />
      ) : (
        <div className="lg:w-[40%] md:w-[60%] w-[90%] m-auto flex flex-col justify-center items-center h-full">
          <div className="">
            <div>
              <img src={logo} alt="megabox_logo" />
              {/* <img src={logo} alt="" /> */}
            </div>

            <div className="flex flex-col gap-8 px-8">
              <div className="flex flex-col gap-2">
                <label className="text-pri font-[600] " htmlFor="email">
                  Email Address {forgotPassword && "to reset password"}
                </label>
                <div className="flex gap-2 items-center border-[2px] border-[#6C6C6C] rounded px-[2px]">
                  <FaUserAlt className="text-[#6C6C6C]" />
                  <input
                    className="h-[2rem] focus:outline-none w-full"
                    name="email"
                    type="email"
                    placeholder="Enter Your Mail"
                    onChange={handleChange}
                    value={email}
                  />
                </div>
              </div>
              {forgotPassword === false && (
                <div className="flex flex-col gap-2">
                  <label className="text-pri font-[600] " htmlFor="password">
                    Password
                  </label>
                  <div className="flex gap-2 items-center border-[2px] border-[#6C6C6C] rounded px-[2px]">
                    <FaLock className="text-[#6C6C6C] " />
                    <input
                      className="h-[2rem] focus:outline-none w-full"
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                      value={password}
                    />
                    <button>
                      <BiHide />
                    </button>
                  </div>
                  <div className="text-lm flex justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sec">Remember Me</span>
                    </div>
                    <button
                      onClick={() => setForgotPassword(true)}
                      className="text-[#FF0000]"
                    >
                      Forgot Password
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={handleLogin}
                className="bg-[#08193E] font-[500] w-full rounded text-white  py-[10px]"
              >
                {forgotPassword ? "Reset Passoword" : "Login"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
