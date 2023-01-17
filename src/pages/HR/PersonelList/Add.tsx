import { DashboardContext } from "../../Dashboard/Dashboard";
import { useContext } from "react";
import InputComp from "../../utils/InputComp";
import { PLNavResolve } from "./PersonelList";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../store/slices/hr";
// import { useNavigate, useNavigation } from "react-router-dom";
import { currentUser } from "../../../globals/HelperFunctions";
import Loading from "../../../components/Loading";
import { Oval } from "react-loader-spinner";
import { FormContainer } from "../../utils/FormContainer";
import { formData } from "./personel_list_data";

const Add = () => {
  const { set_show_decision_modal, inputValue } = useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  let { loading } = useSelector((state: any) => state.hr);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(() => true);
  };

  const handleSend = (e: any, url: string) => {
    e.preventDefault();
    dispatch(addData(url, inputValue, "nill", JSON.parse(currentUser).token));
  };
  const handleSendNew = (e: any, url: string) => {
    e.preventDefault();
    dispatch(addData(url, inputValue, "new", JSON.parse(currentUser).token));
  };

  return (
    <div className="">
      <PLNavResolve name="Add Personnel List (BioData)" />
      {loading && <Loading />}

      <div className="w-full mt-[2em]  ">
        {formData.map((item, index) => {
          return (
            <FormContainer>
              <p className="md:text-[24px] text-[16px] text-white font-[700]">
                {item.section}
              </p>
              {item.data.map((item, index) => {
                return (
                  <InputComp
                    key={index}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    optionList={item.optionList}
                  />
                );
              })}
            </FormContainer>
          );
        })}

        <FormContainer>
          <div className="text-white flex md:gap-[3em] gap-[2em] ">
            <button
              onClick={(e) => handleSend(e, "humanResources_personnelList")}
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
            >
              {loading ? (
                <Oval
                  height={40}
                  width={40}
                  color="#08193E"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#08193E"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                "Save"
              )}
            </button>

            <button
              onClick={(e) => handleSendNew(e, "humanResources_personnelList")}
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
            >
              {loading ? (
                <Oval
                  height={40}
                  width={40}
                  color="#08193E"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#08193E"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                "Save & New"
              )}
            </button>
            <button
              onClick={handleCancel}
              className="rounded-md bg-[#FF5552] font-[700]  py-[1em] w-full"
            >
              Cancel
            </button>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default Add;
