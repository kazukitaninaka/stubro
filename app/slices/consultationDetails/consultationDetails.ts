import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Mentor = {
  id: number | null;
  username: string;
  price: number;
};

export type UserInput = {
  desirableDate: string;
  comments: string;
};

export type ConsultationDetails = {
  id: number | null;
  username: string;
  price: number;
  desirableDate: string;
  comments: string;
};

const initialState: ConsultationDetails = {
  id: null,
  username: '',
  price: 0,
  desirableDate: '',
  comments: '',
};

const consultationDetailsSlice = createSlice({
  name: 'consultationDetails',
  initialState,
  reducers: {
    setMentor: (_, action: PayloadAction<Mentor>) => {
      const { id, username, price } = action.payload;
      return { id, username, price, desirableDate: '', comments: '' };
    },
    setUserInput: (state, action: PayloadAction<UserInput>) => {
      const { desirableDate, comments } = action.payload;
      return {
        id: state.id,
        username: state.username,
        price: state.price,
        desirableDate,
        comments,
      };
    },
    setConsultationDetailsInitial: () => {
      return initialState;
    },
  },
});

export const actions = consultationDetailsSlice.actions;
export default consultationDetailsSlice;
