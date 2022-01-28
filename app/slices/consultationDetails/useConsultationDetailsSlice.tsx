import { useDispatch } from 'react-redux';
import { useSelector } from '../../stores';
import { actions, Mentor, UserInput } from './consultationDetails';

export default function useConsultationDetailsSlice() {
  const dispatch = useDispatch();

  const consultationDetails = useSelector((state) => state.consultationDetails);

  function setMentor(mentor: Mentor) {
    dispatch(actions.setMentor(mentor));
  }

  function setUserInput(userInput: UserInput) {
    dispatch(actions.setUserInput(userInput));
  }

  function setConsultationDetailsInitial() {
    dispatch(actions.setConsultationDetailsInitial());
  }
  return { consultationDetails, setMentor, setUserInput, setConsultationDetailsInitial };
}
