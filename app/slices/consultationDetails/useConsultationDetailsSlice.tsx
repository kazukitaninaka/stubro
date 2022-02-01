import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../stores';
import { actions, Mentor, UserInput } from './consultationDetails';

export default function useConsultationDetailsSlice() {
  const dispatch = useDispatch();

  const consultationDetails = useSelector((state) => state.consultationDetails);

  const setMentor = useCallback((mentor: Mentor) => {
    dispatch(actions.setMentor(mentor));
  }, []);

  const setUserInput = useCallback((userInput: UserInput) => {
    dispatch(actions.setUserInput(userInput));
  }, []);

  const setConsultationDetailsInitial = useCallback(() => {
    dispatch(actions.setConsultationDetailsInitial());
  }, []);

  return { consultationDetails, setMentor, setUserInput, setConsultationDetailsInitial };
}
