const TableData = (props: any) => {
  return <td className="px-3 py-4 ">{props.children}</td>;
};

const TableComponent = ({header_data, body_data}:any ) => {

  return (
    <div className="
     w-full h-full  overflow-scroll p-4">
      <table className=" w-full">
        <thead style={{ whiteSpace: "nowrap" }} className="w-full font-[700]">
          <tr className="w-full ">
            {header_data?.map((item: any) => (
              <TableData key={item.id} className="">
                {item.name}
              </TableData>
            ))}
          </tr>
        </thead>

        <tbody style={{ whiteSpace: "nowrap" }}>
          {body_data?.map((row: any, index:any) => {
            return (
              <tr key={index} className=" border">
                {header_data?.map((item: any) => (
                  <TableData key={item.id} className="">
                    {
                      row[
                        item.name
                          .toLowerCase()
                          .replace(" ", "_")
                          .replace("/", "_")
                      ]
                    }
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
