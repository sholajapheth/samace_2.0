
import {Link} from "react-router-dom"

type navTabletProps = {
  img: string;
  name: string;
  link: string;
};

const NavTablet = ({ img, name, link }: navTabletProps) => {
  return (
    <Link className="" to={link || "/"}>
      <button className="bg-pri text-white font-[700] text-[20px] rounded-md p-4 md:h-[156px] md:w-[147px] w-full flex flex-col items-center">
        <img src={img} alt="name" className="w-[66px] h-[66px]" />
        <p className="break-words">{name}</p>
      </button>
    </Link>
  );
};

export default NavTablet;
