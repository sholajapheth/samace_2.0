import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";

const initialState = {
  data: {},
  loading: false,
  message: "",
};

const hrSlice = createSlice({
  name: "hr",
  initialState: initialState,
  reducers: {
    dataRequested: (state) => {
      state.loading = true;
      state.message = "";
    },

    dataGotten: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
      state.message = action.payload.message;
    },
    dataFectchFailed: (state, action) => {
      console.log(action.payload.response.data.message);
      state.loading = false;
      state.message = action.payload.response.data.message;
    },

    deleteSuccessType: (state, action) => {
      state.loading = false;
      window.location.reload();
      state.message = action.payload.response.data.message;
    },
    addSuccessType: (state, action) => {
      state.loading = false;
      window.history.back();
    },
    addNewSuccessType: (state, action) => {
      console.log(action.payload.message);
      window.location.reload();
      state.loading = false;
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
  (dispatch: AppDispatch, getState: () => any) => {
    console.log(getState().hr.message);

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
        extraheaders,
      })
    );
  };

export const addData =
  (url: string, data?: any, type?: string, extraheaders?: any) =>
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
