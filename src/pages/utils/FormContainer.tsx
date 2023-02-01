export const FormContainer = ({ children, section_name }: any) => (
  <div className=" w-full md:px-[5em] px-[2em] ">
    <p className="md:text-[20px] text-[16px] text-white font-[700]">
      {section_name?.toUpperCase()}
    </p>
    {children}
  </div>
);
