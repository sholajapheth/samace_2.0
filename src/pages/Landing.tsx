import { useDispatch, useSelector } from "react-redux";
import { hr, qa, qc, maintenance, production, logout } from "../assets/svgs";
import logo from "../assets/svgs/logo.svg";
import { NavTablet } from "../globals";
import { logOut } from "../store/slices/auth/loginSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const dispatch = useDispatch<any>();
  const { isLoggedIn } = useSelector((state: any) => state.login);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="md:p-[3rem] p-[1rem]  w-full  ">
      <div className="w-full flex  text-pri mb-[2rem]">
        <div className=" w-full">
          <p className="font-[700] md:text-right text-center ">
            humanresources@sam-ace.com
          </p>

          <div className="flex flex-col items-center">
            <img className="w-[160px]" src={logo} alt="megabox_logo" />
            <p className="md:text-hl text-tl font-[700] ">
              Select Your Department
            </p>
          </div>

          <div className="flex gap-[4rem] md:mt-[3rem] mt-[2rem] justify-center items-center flex-wrap lg:w-[50%] md:w-[70%] w-[90%] m-auto">
            <NavTablet name="Human Resources" img={hr} link={"dashboard/hr"} />
            <NavTablet
              name="Quality Assurance"
              img={qa}
              link={"dashboard/qa"}
            />
            <NavTablet name="Quality Control" img={qc} link={"dashboard/qc"} />

            <NavTablet
              name="Production"
              img={production}
              link={"dashboard/production"}
            />
            <NavTablet
              name="Maintenance"
              img={maintenance}
              link={"dashboard/maintenance"}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-end mt-[2em]">
        <button
          onClick={handleLogOut}
          className="flex flex-col gap-3 items-center "
        >
          <img src={logout} alt="" />
          <span className="text-[#FF5552] text-lm font-[700]">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
