import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen backdrop-blur-md">
      <Oval
        height={80}
        width={80}
        color="#08193E"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#08193E"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />{" "}
    </div>
  );
};

export default Loading;

export const SmallLoading = () => {
  return (
    <div className="">
      <Oval
        height={20}
        width={20}
        color="#08193E"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#08193E"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />{" "}
    </div>
  );
};
