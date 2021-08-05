import { createSlice } from "@reduxjs/toolkit";

// Slice

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const slice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      window.location.href = "/";
    },
    logoutSuccess: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      window.location.href = "/";
    },
  },
});

export default slice.reducer;

// Actions

const { loginSuccess, logoutSuccess } = slice.actions;

export const login = (values) => async (dispatch) => {
  try {
    // await api.post('/api/auth/login/', { username, password })
    dispatch(
      loginSuccess({ username: values?.user, password: values?.password })
    );
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
