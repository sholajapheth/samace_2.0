import { DashboardContext } from "../../Dashboard/Dashboard";
import { useContext, useEffect } from "react";
import { PLNavResolve } from "./PersonelList";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData, updateData } from "../../../store/slices/hr";
import Loading from "../../../components/Loading";
import { currentUser } from "../../../globals/HelperFunctions";
import EditInput from "../../utils/EditInput";
import { useNavigate } from "react-router-dom";
import { states } from "../../../assets/datas/data";
import { FormContainer } from "../../utils/FormContainer";
import { Oval } from "react-loader-spinner";

const Edit = () => {
  // Functions ===>
  // handles decision modal
  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };

  //the updating function,
  const handleSend = (e: any, url: string) => {
    e.preventDefault();
    dispatch(
      updateData(
        url,
        selectedItem[0],
        inputValue,
        JSON.parse(currentUser).token
      )
    );
  };

  // <===

  // desctructured imports ====>
  const { set_show_decision_modal, inputValue, selectedItem } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state: any) => state.hr);
  const { set_show_topbar_actions, setEditData } = useContext(DashboardContext);

  // <=====

  // hooks ===>

  useEffect(() => {
    if (selectedItem.length !== 0) {
      dispatch(getSingleData("humanResources_personnelList", selectedItem[0]));
    } else {
      navigate("/dashboard/hr/pl");
    }
  }, [set_show_topbar_actions, selectedItem, dispatch]);

  useEffect(() => {
    if (data) {
      setEditData(() => data);
      // console.log("edit: ", editData);
    }
  }, [data]);

  // <===

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <PLNavResolve name="Edit" />
          <div className="w-full mt-[2em]  ">
            <FormContainer>
              <p className="md:text-[24px] text-[16px] text-white font-[700]">
                Personal Information
              </p>
              <EditInput name="ID" type="number" placeholder="Enter ID" />
              <EditInput
                name="Start Date"
                type="date"
                placeholder="Enter Start Date"
              />
              <EditInput name="Surname" type="text" placeholder="Surname" />

              <EditInput
                name="First Name"
                type="text"
                placeholder="First Name"
              />
              <EditInput
                name="Other Name"
                type="text"
                placeholder="Other Name"
              />
              <EditInput
                name="Gender"
                type="drop"
                optionList={["Male", "Female"]}
              />
              <EditInput name="DOB" type="date" />
              <EditInput
                name="Place of Birth"
                type="drop"
                optionList={states}
              />
              <EditInput
                name="State of Origin"
                type="drop"
                optionList={states}
              />
              <EditInput name="LGA" type="text" placeholder="Enter LGA" />
              <EditInput
                name="Nationality"
                type="drop"
                optionList={["Nigerian", "Others"]}
              />

              <EditInput
                name="Marital Status"
                type="drop"
                optionList={["Single", "Married", "Divorced"]}
              />

              <EditInput
                name="Number of Children"
                type="drop"
                optionList={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              />

              <EditInput
                name="Religion"
                type="drop"
                optionList={["Christianity", "Islam", "Others"]}
              />

              <EditInput
                name="Means of Identification"
                type="drop"
                optionList={["National ID", "Voters Card", "Others"]}
              />
            </FormContainer>

            <FormContainer>
              <p className="md:text-[24px] text-[16px] text-white font-[700]">
                Contact Information
              </p>

              <EditInput
                name="Home Address"
                type="textarea"
                placeholder="Enter Home Address"
              />
              <EditInput
                name="Phone Number"
                type="phone"
                placeholder="Enter Phone Number"
              />
              <EditInput
                name="Email Address"
                type="email"
                placeholder="Enter Email Address"
              />

              <EditInput
                name="Next of Kin Name"
                type="text"
                placeholder="Enter Next of Kin Name"
              />

              <EditInput
                name="Relationship"
                type="text"
                placeholder="Enter Relationship"
              />

              <EditInput
                name="Next of Kin Gender"
                type="drop"
                optionList={["Male", "Female"]}
              />

              <EditInput
                name="Next of Kin Home Address"
                type="textarea"
                placeholder="Enter Next of Kin Home Address"
              />

              <EditInput
                name="Next of Kin Phone Number"
                type="phone"
                placeholder="Next of Kin Phone Number"
              />

              <EditInput
                name="Next of Kin Email Address"
                type="email"
                placeholder="Next of Kin Email Address"
              />
            </FormContainer>

            <FormContainer>
              <p className="md:text-[24px] text-[16px] text-white font-[700]">
                Job Information
              </p>

              <EditInput
                name="Type of Employment"
                type="drop"
                optionList={["Permanent Staff", "IT Placement"]}
              />

              <EditInput
                name="Department"
                type="text"
                placeholder="Enter Department"
              />

              <EditInput
                name="Job Role"
                type="text"
                placeholder="Enter Job Role"
              />

              <EditInput
                name="Grade Level"
                type="number"
                placeholder="Enter Grade Level"
              />

              <EditInput name="Step" type="text" placeholder="Enter Step" />
            </FormContainer>

            <FormContainer>
              <p className="md:text-[24px] text-[16px] text-white font-[700]">
                Account Information
              </p>

              <EditInput
                name="Bank Name"
                type="text"
                placeholder="Enter Bank Name"
              />
              <EditInput
                name="Account Number"
                type="number"
                placeholder="Enter Account Number"
              />
              <EditInput
                name="PFA Name"
                type="text"
                placeholder="Enter PFA Name"
              />
              <EditInput
                name="Pension Number"
                type="number"
                placeholder="Enter Position Number"
              />
            </FormContainer>

            <FormContainer>
              <p className="md:text-[24px] text-[16px] text-white font-[700]">
                Uniform Information
              </p>

              <EditInput
                name="Top"
                type="drop"
                optionList={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
              />
              <EditInput
                name="Bottom"
                type="drop"
                optionList={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
              />

              <EditInput
                name="Shoe"
                type="drop"
                optionList={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
              />
            </FormContainer>

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

export default Edit;
