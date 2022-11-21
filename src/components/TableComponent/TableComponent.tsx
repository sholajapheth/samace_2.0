const TableData = (props: any) => {
  return <td className="px-3 py-4 ">{props.children}</td>;
};

const TableComponent = ({ header_data, body_data }: any) => {
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
          {body_data.length !== 0 ? (
            body_data?.slice(0, 10).map((row: any, index: any) => {
              return (
                <tr key={index} className=" border">
                  <TableData className="w-10">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" />
                    </div>
                  </TableData>
                  {header_data?.map((item: any) => (
                    <TableData key={item.id} className="">
                      {
                        row[
                          item.name
                            .toLowerCase()
                            .replaceAll(" ", "_")
                            .replaceAll("/", "_")
                            .replaceAll("-", "_")
                            .replaceAll("&", "_")
                        ]
                      }
                    </TableData>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr className="border">
              <td className="p-4 text-center" colSpan={header_data.length}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
