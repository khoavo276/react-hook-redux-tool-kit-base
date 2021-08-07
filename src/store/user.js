import { createSlice } from "@reduxjs/toolkit";
import { setUserLocal, removeUserLocal } from "../utils/Common";
import { pushToast } from "../components/Toast";
// Slice

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const slice = createSlice({
  name: "user",
  initialState: {
    user: initialUser
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      // localStorage.setItem("user", JSON.stringify(action.payload));
      setUserLocal(action.payload?.token, action?.payload?.user);
      window.location.href = "/";
    },
    logoutSuccess: (state) => {
      state.user = null;
      // localStorage.removeItem("user");
      removeUserLocal();
    }
  }
});

export default slice.reducer;

// Actions

const { loginSuccess, logoutSuccess } = slice.actions;

export const login = (values) => async (dispatch) => {
  try {
    // await api.post("/api/auth/login/", { username, password });

    let user = {
      username: values?.user
    };
    let token = "faketoken";

    dispatch(loginSuccess({ user: user, token: token }));
  } catch (e) {
    pushToast("error", e?.message);
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
