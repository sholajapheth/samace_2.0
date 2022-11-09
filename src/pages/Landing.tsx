import { hr, qa, qc, maintenance, production, logout } from "../assets/svgs";
import logo from "../assets/svgs/logo.svg";
import { NavTablet } from "../globals";

const Landing = () => {
  return (
    <div className="md:p-[3rem] p-[1rem]  w-full  ">
      <div className="w-full flex  text-pri mb-[2rem]">
        <div className=" w-full">
          <p className="font-[700] md:text-right text-center ">
            humanresource@sam-ace.com
          </p>

          <div className="flex flex-col items-center">
            <img className="w-[160px]" src={logo} alt="megabox_logo" />
            <p className="md:text-hl text-tl font-[700] ">
              Select Your Department
            </p>
          </div>

          <div className="flex gap-[4rem] md:mt-[3rem] mt-[2rem] justify-center items-center flex-wrap lg:w-[50%] md:w-[70%] w-[90%] m-auto">
            <NavTablet name="Human Resource" img={hr} link={"dashboard/hr"} />
            <NavTablet name="Quality Assurance" img={qa} link={"/"} />
            <NavTablet name="Quality Control" img={qc} link={"/"} />

            <NavTablet name="Production" img={production} link={"/"} />
            <NavTablet name="Maintenance" img={maintenance} link={"/"} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-end mt-[2em]">
        <div className="flex flex-col gap-3 items-center ">
          <img src={logout} alt="" />
          <span className="text-[#FF5552] text-lm font-[700]">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
