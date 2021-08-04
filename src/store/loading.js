import { createSlice } from "@reduxjs/toolkit";

// Slice

const slice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    loadingShow: (state) => {
      state.loading = true;
    },
    loadingHide: (state) => {
      state.loading = false;
    },
  },
});

export default slice.reducer;

// Actions

const { loadingShow, loadingHide } = slice.actions;

export const show = () => async (dispatch) => {
  try {
    return dispatch(loadingShow());
  } catch (e) {
    return console.error(e.message);
  }
};

export const hide = () => async (dispatch) => {
  try {
    return dispatch(loadingHide());
  } catch (e) {
    return console.error(e.message);
  }
};
