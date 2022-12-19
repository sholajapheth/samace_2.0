import { useContext } from "react";
import { DashboardContext } from "../../pages/Dashboard/Dashboard";

// reuseable function camelize to convert string to camelcase
export function camelize(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}


// one time component here for table data 


const TableData = (props: any) => {
  return <td className="px-3 py-4 ">{props.children}</td>;
};


// table component here



const TableComponent = ({ header_data, body_data}: any) => {
  let { selectedItem, setSelectedItem } = useContext(DashboardContext);



  const addId = (id: any) => {
    if (selectedItem?.includes(id)) {
      return
    }else selectedItem.push(id)
    console.log("roew: ", selectedItem);
  }

  const removeId = (id: any) => {
    if (selectedItem?.includes(id)) {
      selectedItem = selectedItem.filter((item: any) => item !== id)
      console.log("roew: ", selectedItem);
    }
  }


  return (
    <div
      className="
     w-full h-full  overflow-scroll p-4"
    >
      <table className=" w-full">
        <thead style={{ whiteSpace: "nowrap" }} className="w-full font-[700]">
          <tr className="w-full ">
            <td></td>
            {header_data?.map((item: any) => (
              <TableData key={item.id} className="">
                {item.name}
              </TableData>
            ))}
          </tr>
        </thead>

        <tbody style={{ whiteSpace: "nowrap" }}>
          {body_data?.length !== 0 &&body_data?.map((row: any, index: any) => {
            return (
              <tr key={index} className=" border">
                <TableData className="w-10">
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      // value={selectedItem : ""}
                      onChange={(e) => {
                        if(e?.target.checked){
                          addId(row._id)
                          setSelectedItem(selectedItem)
                        }else{
                          removeId(row._id)
                          setSelectedItem(selectedItem)
                        }
                   
                      }}
                    />
                  </div>
                </TableData>
                {header_data?.map((item: any) => {
                  return (
                    <TableData key={item.id} className="">
                      {row.properties[camelize(item.name)]}
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
