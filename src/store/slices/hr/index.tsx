import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";

const initialState = {
  data: {},
  loading: false,
  status: "",
};

const hrSlice = createSlice({
  name: "hr",
  initialState: initialState,
  reducers: {
    dataRequested: (state) => {
      state.loading = true;
      state.status = "";
    },

    dataGotten: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;

      // console.log("state: ", state.data);
    },
    dataFectchFailed: (state, action) => {
      alert(action.payload.response.data.message);
      state.loading = false;
      // state.status = action.payload.response.statmus;
      console.log("actoin: ", action.payload);
    },
    deleteSuccessType: (state, action) => {
      state.loading = false;
      window.location.reload();
    },
    addSuccessType: (state, action) => {
      alert(action.payload.message);
      state.loading = false;
      console.log("actoin: ", action.payload);
      window.history.back();
      // window.location.reload();
    },
    addNewSuccessType: (state, action) => {
      alert(action.payload.message);
      state.loading = false;
      console.log("actoin: ", action.payload);
      // window.location.reload();
    },
  },
});

export const {
  dataRequested,
  dataGotten,
  dataFectchFailed,
  deleteSuccessType,
  addSuccessType,
  addNewSuccessType,
} = hrSlice.actions;

export const getData =
  (url: string, data?: any, extraheaders?: any) =>
  (dispatch: AppDispatch, getState: any) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: dataGotten.type,
        onError: dataFectchFailed.type,
        url: "data/" + url + "?page=1&limit=0",
        method: "GET",
        data,
        extraheaders,
      })
    );
  };

export const getSingleData =
  (url: string, id: string, extraheaders?: any) =>
  (dispatch: AppDispatch, getState: any) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: dataGotten.type,
        onError: dataFectchFailed.type,
        url: "data/" + url + "/" + id,
        method: "GET",
        // data,
        extraheaders,
      })
    );
  };

export const addData =
  (url: string, data?: any, type?:string, extraheaders?: any) =>
  (dispatch: AppDispatch) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess:
          type === "new" ? addNewSuccessType.type : addSuccessType.type,
        onError: dataFectchFailed.type,
        url: "data/" + url,
        method: "POST",
        data,
        extraheaders,
      })
    );
  };

export const updateData =
  (url: string, id: string, data: any, extraheaders?: any) =>
  (dispatch: AppDispatch) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: addSuccessType.type,
        onError: dataFectchFailed.type,
        url: "data/" + url + "/" + id,
        method: "PUT",
        data,
        extraheaders,
      })
    );
  };

export const deleteData =
  (url: string, ids: string[], extraheaders: any) =>
  (dispatch: AppDispatch) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: deleteSuccessType.type,
        onError: dataFectchFailed.type,
        url: "data/" + url,
        method: "DELETE",
        data: { ids },
        extraheaders,
      })
    );
  };

export default hrSlice.reducer;
