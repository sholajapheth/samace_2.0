import por from "./assets/por.svg";
import dyr from "./assets/dyr.svg";
import ssr from "./assets/ssr.svg";
import store from "../../store/configureStore";

export let { loading, message } = store.getState().production;

export const sidebar_data: any = [
  {
    id: 0,
    name: "Production Order Record",
    img: por,
    link: "production/records/por",
  },

  {
    id: 1,
    name: "Daily Yeild Record",
    img: dyr,
    link: "production/records/dyr",
  },
  {
    id: 2,
    name: "Scratch Sticker Record",
    img: ssr,
    link: "production/records/ssr",
  },
];
