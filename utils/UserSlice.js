import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userProfile: {},
  },
  reducers: {
    updateLoginStatus(state, action) {
      state.userProfile = action.payload;
    },
  },
});

export const { updateLoginStatus } = UserSlice.actions;
export default UserSlice.reducer;
