import { DashboardContext } from "../../Dashboard/Dashboard";
import { useContext } from "react";
import InputComp from "../../utils/InputComp";
import { PLNavResolve } from "./PersonelList";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../store/slices/hr";
// import { useNavigate, useNavigation } from "react-router-dom";
import { currentUser } from "../../../globals/HelperFunctions";
import Loading from "../../../components/Loading";
import { states } from "../../../assets/datas/data";
import { Oval } from "react-loader-spinner";
import { FormContainer } from "../../utils/FormContainer";

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
        <FormContainer>
          <p className="md:text-[24px] text-[16px] text-white font-[700]">
            Personal Information
          </p>
          <InputComp name="ID" type="number" placeholder="Enter ID" />
          <InputComp
            name="Start Date"
            type="date"
            placeholder="Enter Start Date"
          />
          <InputComp name="Surname" type="text" placeholder="Surname" />

          <InputComp name="First Name" type="text" placeholder="First Name" />
          <InputComp name="Other Name" type="text" placeholder="Other Name" />
          <InputComp
            name="Gender"
            type="drop"
            optionList={["Male", "Female"]}
          />
          <InputComp name="DOB" type="date" />
          <InputComp name="Place of Birth" type="drop" optionList={states} />
          <InputComp name="State of Origin" type="drop" optionList={states} />
          <InputComp name="LGA" type="text" placeholder="Enter LGA" />
          <InputComp
            name="Nationality"
            type="drop"
            optionList={["Nigerian", "Others"]}
          />

          <InputComp
            name="Marital Status"
            type="drop"
            optionList={["Single", "Married", "Divorced"]}
          />

          <InputComp
            name="Number of Children"
            type="drop"
            optionList={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          />

          <InputComp
            name="Religion"
            type="drop"
            optionList={["Christianity", "Islam", "Others"]}
          />

          <InputComp
            name="Means of Identification"
            type="drop"
            optionList={["National ID", "Voters Card", "Others"]}
          />
        </FormContainer>

        <FormContainer>
          <p className="md:text-[24px] text-[16px] text-white font-[700]">
            Contact Information
          </p>

          <InputComp
            name="Home Address"
            type="textarea"
            placeholder="Enter Home Address"
          />
          <InputComp
            name="Phone Number"
            type="phone"
            placeholder="Enter Phone Number"
          />
          <InputComp
            name="Email Address"
            type="email"
            placeholder="Enter Email Address"
          />

          <InputComp
            name="Next of Kin Name"
            type="text"
            placeholder="Enter Next of Kin Name"
          />

          <InputComp
            name="Relationship"
            type="text"
            placeholder="Enter Relationship"
          />

          <InputComp
            name="Next of Kin Gender"
            type="drop"
            optionList={["Male", "Female"]}
          />

          <InputComp
            name="Next of Kin Home Address"
            type="textarea"
            placeholder="Enter Next of Kin Home Address"
          />

          <InputComp
            name="Next of Kin Phone Number"
            type="phone"
            placeholder="Next of Kin Phone Number"
          />

          <InputComp
            name="Next of Kin Email Address"
            type="email"
            placeholder="Next of Kin Email Address"
          />
        </FormContainer>

        <FormContainer>
          <p className="md:text-[24px] text-[16px] text-white font-[700]">
            Job Information
          </p>

          <InputComp
            name="Type of Employment"
            type="drop"
            optionList={["Permanent Staff", "IT Placement"]}
          />

          <InputComp
            name="Department"
            type="text"
            placeholder="Enter Department"
          />

          <InputComp name="Job Role" type="text" placeholder="Enter Job Role" />

          <InputComp
            name="Grade Level"
            type="number"
            placeholder="Enter Grade Level"
          />

          <InputComp name="Step" type="text" placeholder="Enter Step" />
        </FormContainer>

        <FormContainer>
          <p className="md:text-[24px] text-[16px] text-white font-[700]">
            Account Information
          </p>

          <InputComp
            name="Bank Name"
            type="text"
            placeholder="Enter Bank Name"
          />
          <InputComp
            name="Account Number"
            type="number"
            placeholder="Enter Account Number"
          />
          <InputComp name="PFA Name" type="text" placeholder="Enter PFA Name" />
          <InputComp
            name="Pension Number"
            type="number"
            placeholder="Enter Position Number"
          />
        </FormContainer>

        <FormContainer>
          <p className="md:text-[24px] text-[16px] text-white font-[700]">
            Uniform Information
          </p>

          <InputComp
            name="Top"
            type="drop"
            optionList={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
          />
          <InputComp
            name="Bottom"
            type="drop"
            optionList={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
          />

          <InputComp
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
