import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import logo from "../assets/svgs/logo.svg";

const Login = () => {
  return (
    <div className="h-screen w-full">
      <div className="lg:w-[40%] md:w-[60%] w-[90%] m-auto flex flex-col justify-center items-center h-full">
        <div className="">
          <div>
            <img src={logo} alt="megabox_logo" />
            {/* <img src={logo} alt="" /> */}
          </div>

          <div className="flex flex-col gap-8 px-8">
            <div className="flex flex-col gap-2">
              <label className="text-pri font-[600] " htmlFor="email">
                Email Address
              </label>
              <div className="flex gap-2 items-center border-[2px] border-[#6C6C6C] rounded px-[2px]">
                <FaUserAlt className="text-[#6C6C6C]" />
                <input
                  className="h-[2rem] focus:outline-none w-full"
                  name="email"
                  type="email"
                  placeholder="Enter Your Mail"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-pri font-[600] " htmlFor="email">
                Password
              </label>
              <div className="flex gap-2 items-center border-[2px] border-[#6C6C6C] rounded px-[2px]">
                <FaLock className="text-[#6C6C6C] " />
                <input
                  className="h-[2rem] focus:outline-none w-full"
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
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
                <span className="text-[#FF0000]">Forgot Password</span>
              </div>
            </div>

            <button className="bg-[#08193E] font-[500] w-full rounded text-white  py-[10px]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
