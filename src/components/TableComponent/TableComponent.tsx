
type table_data_props = {
  header_data: any;
  body_data: any;
};

const TableData = (props: any) => {
  return <td className="px-3 py-4 ">{props.children}</td>;
};

const TableComponent = ({header_data, body_data}:table_data_props) => {
  // const zip = (arr1: any, arr2: any) => arr1.map((k: any, i: any) => [k, arr2[i]]);

  // const zipped = zip(header_data, body_data);
  return (
    <div className=" w-full h-full  overflow-scroll p-4">
      <table className=" w-full">
        <thead style={{ whiteSpace: "nowrap" }} className="w-full font-[700]">
          <tr className="w-full ">
            {
              header_data.map((item:any) => (
                <TableData key={item.id} className="">{item.name}</TableData>
              ))
            }
           
          </tr>
        </thead>

        <tbody style={{ whiteSpace: "nowrap" }}>
          {body_data.map((row:any) => {
            return (
              <tr key={row.id} className=" border">
                {header_data.map((item: any) => (
                  <TableData key={item.id} className="">
                    {row[item.name.replace("/", "_").toLowerCase()]}
                  </TableData>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
