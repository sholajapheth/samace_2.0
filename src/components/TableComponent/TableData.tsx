import { detectDateFormat } from "../global_utils/helper_fuctions";

export const TableData = (props: any) => {
  if (detectDateFormat(props?.children) === "") {
    if (props?.children?.toString().length > 25) {
      return (
        <td className="px-3 py-4 ">{props.children.substring(0, 25)}...</td>
      );
    } else {
      return <td className="px-3 py-4 ">{props.children}</td>;
    }
  } else {
    return <td className="px-3 py-4 ">{detectDateFormat(props?.children)}</td>;
  }
  // return <td className="px-3 py-4 ">{props.children}</td>;
};
