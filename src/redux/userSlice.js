import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  name: "",
  surname: "",
  email: "",
  city: "",
  street: "",
  house: "",
  avatar: null,
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    pageNext: (state) => {
      state.currentPage += 1;
    },
    pagePrevious: (state) => {
      state.currentPage -= 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setHouse: (state, action) => {
      state.house = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  pageNext,
  pagePrevious,
  setName,
  setSurname,
  setEmail,
  setCity,
  setStreet,
  setHouse,
  setAvatar,
  setPassword,
} = userSlice.actions;

export const selectCurrentPage = (state) => state.user.currentPage;
export const getName = (state) => state.user.name;
export const getSurname = (state) => state.user.surname;
export const getEmail = (state) => state.user.email;
export const getCity = (state) => state.user.city;
export const getStreet = (state) => state.user.street;
export const getHouse = (state) => state.user.house;
export const getAvatar = (state) => state.user.avatar;
export const getPassword = (state) => state.user.password;

export default userSlice.reducer;
