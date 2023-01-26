import { useCallback, useContext, useEffect } from "react";
import { DashboardContext } from "../Dashboard/Dashboard";

type resolveProps = {
  name: string;
  resolve_data: any;
};

export const NavResolve = ({ name, resolve_data }: resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: any = useCallback(() => resolve_data, []);

  useEffect(() => {
    set_topbar_value(name);
    set_sidebar_nav_data(data);
    set_show_topbar_actions("");
  }, [data]);

  return <> </>;
};
