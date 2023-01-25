import React, { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../Dashboard/Dashboard";
import { currentUser } from "../../globals/HelperFunctions";
import { FormContainer } from "./FormContainer";
import Loading, { SmallLoading } from "../../components/Loading";
import EditInput from "./EditInput";
import { useNavigate } from "react-router-dom";
import { getSingleData, updateData } from "../../store/slices/hr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EditBox = ({ loading, data, navResolve, endPoint, formData }: any) => {
  const { message } = useSelector((state: any) => state.hr);
  const { set_show_decision_modal, inputValue, selectedItem } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { set_show_topbar_actions, setEditData } = useContext(DashboardContext);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };

  const handleSend = (e: any, url: string) => {
    e.preventDefault();
    console.log("inputValue: ", inputValue);
    if (inputValue) {
      dispatch(
        updateData(
          url,
          selectedItem[0],
          inputValue,
          JSON.parse(currentUser).token
        )
      );
    } else console.log("no input value");
  };

  useEffect(() => {
    if (selectedItem.length !== 0) {
      dispatch(getSingleData(endPoint, selectedItem[0]));
    } else {
      navigate("/dashboard/hr/pl");
    }
  }, [set_show_topbar_actions, selectedItem, dispatch]);

  useEffect(() => {
    if (data) {
      setEditData(() => data?.properties);
    }
  }, [data]);

  const notify = useCallback(() => toast(message), [message]);

  useEffect(() => {
    if (message) {
      notify();
    }
  }, [message]);



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <>{navResolve}</>
          <ToastContainer />

          <div className="w-full mt-[2em]  ">
            {formData.map((item: any, index: any) => {
              return (
                <FormContainer key={index} section_name={item.section}>
                  {item.data.map((item: any, index: any) => {
                    return (
                      <EditInput
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
                  {loading ? <SmallLoading /> : "Save"}
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
      )}
    </>
  );
};

export default EditBox;
