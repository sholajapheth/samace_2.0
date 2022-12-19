import { createContext } from "react";

export type dashboard_context_type = {
    topbar_value: string;
    set_topbar_value: (value: string) => void;
};


export const dashboard_context = createContext<dashboard_context_type>({
    topbar_value: "",
    set_topbar_value: () => {},
});
