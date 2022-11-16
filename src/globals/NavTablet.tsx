
import {Link} from "react-router-dom"

type navTabletProps = {
  img: string;
  name: string;
  link: string;
};

const NavTablet = ({ img, name, link }: navTabletProps) => {
  return (
    <Link className="" to={link || "/"}>
      <button className="bg-pri text-white font-[700]  rounded-md p-4 md:h-[156px] md:w-[147px] w-full flex flex-col justify-around items-center h-full">
        <img src={img} alt="name" className="md:w-[66px] md:h-[66px] w-[45px] h-[45px]" />
        <p className="break-words ">{name}</p>
      </button>
    </Link>
  );
};

export default NavTablet;
