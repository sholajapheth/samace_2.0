export const FormContainer = ({ children, section_name }: any) => (
  <div className=" w-full  py-[2em] md:px-[5em] px-[2em] mb-8">
    <p className="md:text-[24px] text-[16px] text-white font-[700]">
      {section_name?.toUpperCase()}
    </p>
    {children}
  </div>
);
