import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Mentor = {
  id: number | null;
  username: string;
  price: number;
};

export type UserInput = {
  desirableDate: string;
  message: string;
};

export type ConsultationDetails = {
  mentorId: number | null;
  username: string;
  price: number;
  desirableDate: string;
  message: string;
};

const initialState: ConsultationDetails = {
  mentorId: null,
  username: '',
  price: 0,
  desirableDate: '',
  message: '',
};

const consultationDetailsSlice = createSlice({
  name: 'consultationDetails',
  initialState,
  reducers: {
    setMentor: (_, action: PayloadAction<Mentor>) => {
      const { id, username, price } = action.payload;
      return { mentorId: id, username, price, desirableDate: '', message: '' };
    },
    setUserInput: (state, action: PayloadAction<UserInput>) => {
      const { desirableDate, message } = action.payload;
      return {
        mentorId: state.mentorId,
        username: state.username,
        price: state.price,
        desirableDate,
        message,
      };
    },
    setConsultationDetailsInitial: () => {
      return initialState;
    },
  },
});

export const actions = consultationDetailsSlice.actions;
export default consultationDetailsSlice;
