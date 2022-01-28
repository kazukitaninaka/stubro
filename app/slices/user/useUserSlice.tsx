import { useDispatch } from 'react-redux';
import { useSelector } from '../../stores';
import { actions, User } from './user';

export default function useUserSlice() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const isUserLoggedIn = !!user.id;

  function setUser(user: User) {
    dispatch(actions.setUser(user));
  }

  function setUserInitial() {
    dispatch(actions.setUserInitial());
  }
  return { isUserLoggedIn, user, setUser, setUserInitial };
}
