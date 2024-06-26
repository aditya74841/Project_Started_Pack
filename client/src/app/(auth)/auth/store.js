// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const AuthSlice = createSlice({
//   name: "auth",

//   initialState: {
//     loading: false,
//     isLoggedIn: false,
//     profile: {},
//   },

//   reducers: {
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setIsLoggedIn: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//     setProfile: (state, action) => {
//       state.profile = action.payload;
//     },
//   },
// });

// export const { setLoading, setIsLoggedIn, setProfile } = AuthSlice.actions;

// export const userRegister = (payload, callback) => async (dispatch) => {
//   dispatch(setLoading(true));
//   const response = await axios.post(
//     `${process.env.REACT_APP_API_URL}/users/register`,
//     payload
//   );

//   dispatch(setLoading(false));
// };

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AuthSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    isLoggedIn: false,
    profile: {},
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setLoading, setIsLoggedIn, setProfile } = AuthSlice.actions;

export const userRegister = (payload, callback) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/register`,
      payload
    );
    dispatch(setLoading(false));
    if (callback) callback(null, response.data);
  } catch (error) {
    dispatch(setLoading(false));
    if (callback) callback(error, null);
  }
};

export const userLogin = (payload, callback) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/login`,
      payload,
      {
        withCredentials: true,
      }
    );
    dispatch(setLoading(false));
    dispatch(setIsLoggedIn(true));
    dispatch(setProfile(response.data.data));
    if (callback) callback(null, response.data);
  } catch (error) {
    dispatch(setLoading(false));
    if (callback) callback(error, null);
  }
};

export const getProfile = (callback) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/current-user`,
      { withCredentials: true }
    );
    dispatch(setLoading(false));
    dispatch(setProfile(response.data.data.user));
    if (callback) callback(null, response.data);
  } catch (error) {
    dispatch(setLoading(false));
    if (callback) callback(error, null);
  }
};

export const handleLogout = (callback) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/logout`,
      { withCredentials: true }
    );
    dispatch(setLoading(false));
    if (callback) callback(null, response.data);
  } catch (error) {
    dispatch(setLoading(false));
    if (callback) callback(error, null);
  }
};

export const sendForgetPasswordMail =
  (payload, callback) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/forgot-password`,
        payload
      );
      dispatch(setLoading(false));
      if (callback) callback(null, response.data);
    } catch (error) {
      dispatch(setLoading(false));
      if (callback) callback(error, null);
    }
  };

export const changeCurrentPassword =
  (payload, callback) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/change-password`,
        payload,
        { withCredentials: true }
      );
      dispatch(setLoading(false));
      if (callback) callback(null, response.data);
    } catch (error) {
      dispatch(setLoading(false));
      if (callback) callback(error, null);
    }
  };

// export const userProfile = (state) => state.auth.profile;

// export const isLoggedIn = (state) => state.auth.isLoggedIn;

export default AuthSlice.reducer;
