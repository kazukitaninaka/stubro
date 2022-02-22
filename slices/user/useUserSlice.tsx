import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../stores';
import { actions, User } from './user';

export default function useUserSlice() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const isUserLoggedIn = !!user.id;

  const setUser = useCallback((user: User) => {
    dispatch(actions.setUser(user));
  }, []);

  const setUserInitial = useCallback(() => {
    dispatch(actions.setUserInitial());
  }, []);

  return { isUserLoggedIn, user, setUser, setUserInitial };
}
