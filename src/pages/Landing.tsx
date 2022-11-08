import hr from "./assets/svgs/hr.svg";
import qa from "./assets/svgs/qa.svg";
import qc from "./assets/svgs/qc.svg";
import maintenance from "./assets/svgs/maintenance.svg";
import production from "./assets/svgs/production.svg";
import logo from "../assets/svgs/logo.svg";
import NavTablet from "../globals/NavTablet";

const Landing = () => {
  return (
    <div className="md:p-[4rem] p-[1rem] h-screen w-full flex  text-pri">
      <div className=" w-full">
        <p className="font-[700] md:text-right text-center mb-[2rem]">humanresource@sam-ace.com</p>

        <div className="flex flex-col items-center">
          <img className="w-[160px]" src={logo} alt="megabox_logo" />
          <p className="md:text-hl text-tl font-[700] ">Select Your Department</p>
        </div>

        <div className="flex gap-[4rem] md:mt-[4rem] mt-[2rem] justify-center items-center flex-wrap lg:w-[50%] md:w-[70%] w-[90%] m-auto">
          <NavTablet name="Human Resource" img={hr} link={"/"} />
          <NavTablet name="Quality Assurance" img={qa} link={"/"} />
          <NavTablet name="Quality Control" img={qc} link={"/"} />

          <NavTablet name="Production" img={production} link={"/"} />
          <NavTablet name="Maintenance" img={maintenance} link={"/"} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
