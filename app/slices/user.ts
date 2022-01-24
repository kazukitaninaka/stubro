import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string | null;
  email: string;
  // 追加されるかも
};

const initialState: User = {
  id: null,
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return {
        id: action.payload.id,
        email: action.payload.email,
      };
    },
    signOut: () => {
      return initialState;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice;
