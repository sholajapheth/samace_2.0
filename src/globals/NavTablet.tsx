import { Link } from "react-router-dom";

type navTabletProps = {
  img?: string;
  name: string;
  link: string;
  icon?: any;
};

const NavTablet = ({ img, name, link, icon }: navTabletProps) => {
  return (
    <Link className="" to={link || "/"}>
      <button className="bg-pri text-white font-[700]  rounded-md p-4 md:h-[156px] w-[147px] flex flex-col justify-around items-center h-full">
        {img && (
          <img
            src={img}
            alt="name"
            className="md:w-[66px] md:h-[66px] w-[45px] h-[45px]"
          />
        )}
        {icon && (
          <p className="md:text-[4.5em] text-[2.5em] text-white">{icon}</p>
        )}
        <p className="break-words ">{name}</p>
      </button>
    </Link>
  );
};

export default NavTablet;
