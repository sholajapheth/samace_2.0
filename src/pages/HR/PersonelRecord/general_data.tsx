import disciplinary from "../assets/disciplinary.svg";
import medical from "../assets/medical.svg";
import pay from "../assets/pay.svg";
import leave from "../assets/leave.svg";
import assessment from "../assets/assessment.svg";
import training from "../assets/training.svg";
import store from "../../../store/configureStore";


export let { loading, message } = store.getState().hr;

export const sidebar_data: any = [
  { id: 0, name: "Tranining", img: training, link: "hr/pr/training" },
  {
    id: 4,
    name: "Assessment",
    img: assessment,
    link: "hr/pr/assessment",
  },
  { id: 3, name: "Pay", img: pay, link: "hr/pr/pay" },
  {
    id: 1,
    name: "Disciplinary",
    img: disciplinary,
    link: "hr/pr/disciplinary",
  },
  { id: 2, name: "Medical", img: medical, link: "hr/pr/medical" },
  { id: 5, name: "Leave", img: leave, link: "hr/pr/leave" },
];
