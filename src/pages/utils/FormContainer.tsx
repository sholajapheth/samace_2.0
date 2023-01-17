export const FormContainer = ({ children, section_name }: any) => (
  <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em] mb-8">
    <p className="md:text-[24px] text-[16px] text-white font-[700]">
      {section_name?.toUpperCase()}
    </p>
    {children}
  </div>
);
