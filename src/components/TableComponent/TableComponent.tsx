import { useContext } from "react";
import { DashboardContext } from "../../pages/Dashboard/Dashboard";
import { camelize, detectDateFormat } from "../global_utils/helper_fuctions";
import { TableData } from "./TableData";

const TableComponent = ({ header_data, body_data }: any) => {
  let { selectedItem, setSelectedItem, prevNext } =
    useContext(DashboardContext);

  const addId = (id: any) => {
    if (selectedItem?.includes(id)) {
      return;
    } else selectedItem.push(id);
    console.log("roew: ", selectedItem);
  };

  const removeId = (id: any) => {
    if (selectedItem?.includes(id)) {
      selectedItem = selectedItem.filter((item: any) => item !== id);
      console.log("roew: ", selectedItem);
    }
  };

  return (
    <div
      className="
     w-full h-full overflow-auto   p-4 lg:mb-0 md:mb-[5rem]"
    >
      <table className=" w-full">
        <thead style={{ whiteSpace: "nowrap" }} className="w-full font-[700]">
          <tr className="w-full ">
            <td></td>
            {header_data?.map((item: any, index: number) => (
              <TableData key={index} className="">
                {item.name}
              </TableData>
            ))}
          </tr>
        </thead>

        <tbody style={{ whiteSpace: "nowrap" }}>
          {body_data?.length !== 0 &&
            body_data
              ?.slice(prevNext.prev, prevNext.next)
              .map((row: any, index: any) => {
                return (
                  <tr key={index} className=" border">
                    <TableData className="w-10">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          // value={selectedItem : ""}
                          onChange={(e) => {
                            if (e?.target.checked) {
                              addId(row._id);
                              setSelectedItem(selectedItem);
                            } else {
                              removeId(row._id);
                              setSelectedItem(selectedItem);
                            }
                          }}
                        />
                      </div>
                    </TableData>
                    {header_data?.map((item: any, index: number) => {
                      return (
                        <TableData key={index} className="">
                          {row?.properties[camelize(item.name)]}
                        </TableData>
                      );
                    })}
                  </tr>
                );
              })}
        </tbody>
      </table>

      {body_data?.length === 0 && (
        <div className="flex items-center justify-center h-96">
          <h1 className="text-2xl font-[700]">No Data Found</h1>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
