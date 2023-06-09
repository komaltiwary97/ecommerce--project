import { useSelector } from 'react-redux';

// if data is availabe inside a localStorage than it returns true otherwise false

export const isAuthenticated = () => {
  const homeData = useSelector((state) => state.userLoginReducer.logininfo);
  if (typeof window == 'undefined') {
    return false;
  } else if (homeData) {
    return true;
  } else {
    return false;
  }
};