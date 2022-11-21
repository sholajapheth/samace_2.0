import InputComp from "../../../../utils/InputComp";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { ProductionNavResolve } from "../POR/POR";



const TableData = (props: any) => {
  return <td className="px-3 py-4 bg-white rounded-md   w-full mr-[10px]">{props.children}</td>;
};
const TableRow = (props: any) => {
  return <td className="flex justify-between w-full my-[10px]">{props.children}</td>;
};


const Add = () => {
  const { set_show_decision_modal } = useContext(DashboardContext);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };
  return (
    <div>
      <ProductionNavResolve name="Scratch Sticker Record Form" />

      <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <InputComp name="Date Issued" type="date" placeholder="Enter date" />
          <InputComp
            name="Product"
            type="drop"
            optionList={["prod1", "prod2", "prod3"]}
          />

          <InputComp
            name="Batch Number "
            type="number"
            placeholder="Enter Batch Number"
          />

          <div className="w-full text-white ">
            <table className="w-full">
              <th>
                <TableRow className="flex justify-between w-full">
                  <td>OID</td>
                  <td>OID Start</td>
                  <td>OID End</td>
                  <td>Used</td>
                </TableRow>
              </th>
              <tbody>
                <TableRow className="flex ">
                  <td className="w-full">ROLL 1</td>
                  <TableData></TableData>
                  <TableData></TableData>
                  <TableData></TableData>
                </TableRow>
                <TableRow>
                  <td className="w-full">ROLL 2</td>
                  <TableData></TableData>
                  <TableData></TableData>
                  <TableData></TableData>
                </TableRow>
                <TableRow>
                  <td className="w-full">ROLL 3</td>
                  <TableData></TableData>
                  <TableData></TableData>
                  <TableData></TableData>
                </TableRow>
                <TableRow>
                  <td className="w-full">Total Quantity Used</td>
                  <tr></tr>
                  <tr></tr>
                  <TableData></TableData>
                </TableRow>
              </tbody>
            </table>
          </div>
          <InputComp
            name="Authentication Date"
            type="date"
            placeholder="Enter Authentication date"
          />
          <InputComp
            name="Authentication By"
            type="text"
            placeholder="Enter Authentication Officer"
          />

          <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
            <button className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
              Save
            </button>
            <button
              onClick={handleCancel}
              className="rounded-md bg-[#FF5552] font-[700]  py-[1em] w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
