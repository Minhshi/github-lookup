import React, { useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserReducer from './UserReducer';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const initialState = {
    user: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUser = async () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const response = await axios.get(
      `https://api.github.com/users/Minhshi?client_id=${clientId}&client_secret=${clientSecret}`,
    );

    dispatch({ type: 'GET_USER', payload: response.data });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
