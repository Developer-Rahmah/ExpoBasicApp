import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../";
import { sliceNames } from "../../constants";
export interface AuthState {
  user: any;
  ACCESS_TOKEN: string | null;
}
const initialState: AuthState = {
  user: null,
  ACCESS_TOKEN: null,
};

const authSlice = createSlice({
  name: sliceNames.AUTH,
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateAccessToken: (state, action: { payload: string }) => {
      state.ACCESS_TOKEN = action.payload;
    },
  },
});

// grab needed actions.
export const { updateUser, updateAccessToken } = authSlice.actions;

// use selector shorthand
export const authSelector = (state: RootState) => state.auth;

// export default.
export default authSlice.reducer;
