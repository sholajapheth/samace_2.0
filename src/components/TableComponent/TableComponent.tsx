import mock_datas from "./MOCK_DATA.json";

// type table_component = Array<{
//   table_Header: Array<string>;
//   table_row: Array<string>;
// }>;

const TableData = (props: any) => {
  return <td className="px-3 py-4 ">{props.children}</td>;
};

const TableComponent = () => {
  return (
    <div className=" w-full h-full  overflow-scroll p-4">
      <table className=" ">
        <thead style={{ whiteSpace: "nowrap" }} className="w-full font-[700]">
          <tr className="w-full ">
            <TableData className="">ID</TableData>
            <TableData className="">Name</TableData>
            <TableData>Home Address</TableData>
            <TableData>Email Address</TableData>
            <TableData>Phone Number</TableData>
            <TableData>Marital Status</TableData>
            <TableData>Religion</TableData>
            <TableData>State of Origin</TableData>
            <TableData>LGA</TableData>
            <TableData>Start Date</TableData>
            <TableData>Job Type</TableData>
            <TableData>Department</TableData>
            <TableData>Grade Level</TableData>
          </tr>
        </thead>

        <tbody style={{ whiteSpace: "nowrap" }}>
          {mock_datas.map((row) => {
            return (
              <tr key={row.id} className=" border">
                <TableData>{row.id}</TableData>
                <TableData>{row.name}</TableData>
                <TableData>{row.home_address}</TableData>
                <TableData>{row.email}</TableData>
                <TableData>{row.phone_number}</TableData>
                <TableData>{row.marital_status}</TableData>
                <TableData>{row.religion}</TableData>
                <TableData>{row.state_of_origin}</TableData>
                <TableData>{row.lga}</TableData>
                <TableData>{row.start_date}</TableData>
                <TableData>{row.job_title}</TableData>
                <TableData>{row.department}</TableData>
                <TableData>{row.grade_level}</TableData>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
