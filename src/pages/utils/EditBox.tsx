import React, { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../Dashboard/Dashboard";
import { currentUser } from "../../globals/HelperFunctions";
import { FormContainer } from "./FormContainer";
import Loading, { SmallLoading } from "../../components/Loading";
import EditInput from "./EditInput";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface EditBoxProps {
  loading: boolean;
  data: any;
  navResolve: any;
  endPoint: string;
  formData: any;
  message: string;
  updateData: any;
  getSingleData: any;
}

const EditBox = ({
  loading,
  data,
  navResolve,
  endPoint,
  formData,
  message,
  updateData,
  getSingleData,
}: EditBoxProps) => {
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
    console.log("send: ", inputValue);
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
      dispatch(
        getSingleData(endPoint, selectedItem[0], JSON.parse(currentUser).token)
      );
    } else {
      alert("Please select an item");
      navigate(-1);
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

          <div className="  m-auto py-[2em]  mt-[2em] bg-pri lg:w-[65%] md:w-[80%] w-[90%]">
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
                        dropType={item.dropType}
                        section={item.section}
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
