import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";

const initialState = {
  data: {},
  loading: false,
};

const hrSlice = createSlice({
  name: "hr",
  initialState: initialState,
  reducers: {
    dataRequested: (state) => {
      state.loading = true;
    },

    dataGotten: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
      // console.log("state: ", state.data);
    },
    dataFectchFailed: (state, action) => {
      alert(action.payload.response.data.message);
      console.log("actoin: ", action.payload);
      state.loading = false;
    },
    deleteSuccessType: (state, action) => {
      state.loading = false;
      window.location.reload();
    },
    addSuccessType: (state, action) => {
      state.loading = false;
      alert(action.payload.message);
      window.location.reload();
    }

  },
});

export const { dataRequested, dataGotten, dataFectchFailed,deleteSuccessType, addSuccessType } = hrSlice.actions;

export const getData =
  (url: string, data?: any, extraheaders?: any) =>
  (dispatch: AppDispatch, getState: any) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: dataGotten.type,
        onError: dataFectchFailed.type,
        url: "data/" + url,
        method: "GET",
        data,
        extraheaders,
      })
    );
  };

  export const getSingleData =(url: string, id: string, extraheaders?: any) =>
  (dispatch: AppDispatch, getState: any) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: dataGotten.type,
        onError: dataFectchFailed.type,
        url: "data/" + url +"/"+ id,
        method: "GET",
        // data,
        extraheaders,
      })
    );
  };


  export const addData =
  (url: string, data?: any, extraheaders?: any) =>
  (dispatch: AppDispatch, getState: any) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: addSuccessType.type,
        onError: dataFectchFailed.type,
        url: "data/" + url,
        method: "POST",
        data,
        extraheaders,
      })
    );
  };

export const updateData =
  (url: string, id:string, data: any, extraheaders?: any) =>
  (dispatch: AppDispatch, getState: any) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: addSuccessType.type,
        onError: dataFectchFailed.type,
        url: "data/" + url +"/"+ id,
        method: "PUT",
        data,
        extraheaders,
      })
    );
  };


  export const deleteData =
  (url: string, ids: string[], extraheaders: any) =>
  (dispatch: AppDispatch, getState: any) => {
    dispatch(
      apiCallBegan({
        onStart: dataRequested.type,
        onSuccess: deleteSuccessType.type,
        onError: dataFectchFailed.type,
        url: "data/" + url,
        method: "DELETE",
        data: {ids},
        extraheaders,
      })
    );
  };


export default hrSlice.reducer;
