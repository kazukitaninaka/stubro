import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: string | null;
  email: string;
  username: string;
  // 追加されるかも
};

const initialState: User = {
  id: null,
  email: '',
  username: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => {
      return {
        id: action.payload.id,
        email: action.payload.email,
        username: action.payload.username
      };
    },
    setUserInitial: () => {
      return initialState;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice;
