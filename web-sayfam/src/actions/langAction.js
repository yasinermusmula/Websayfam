import axios from "axios";
export const Tr = "Tr";
export const En = "En";

export const trAction = () => {
  return { type: Tr };
};

export const enAction = () => {
  return { type: En };
};

export const postDataEn = (data) => (dispatch) => {
  return axios.post("https://reqres.in/api/workintech", data).then((res) => {
    const langActionEn = { type: En, payload: res.data.En };
    dispatch(langActionEn);
  });
};

export const postDataTr = (data) => (dispatch) => {
  return axios.post("https://reqres.in/api/workintech", data).then((res) => {
    const langActionTr = { type: Tr, payload: res.data.En };
    dispatch(langActionTr);
  });
};
