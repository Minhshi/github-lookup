import React, { useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UsersReducer from './UsersReducer';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const initialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const getUsers = async () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const response = await axios.get(
      `https://api.github.com/search/users?q=minh&client_id=${clientId}&client_secret=${clientSecret}`,
    );

    dispatch({ type: 'GET_USERS', payload: response.data.items });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        getUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useUsersContext = () => useContext(UsersContext);

export { UsersProvider, useUsersContext };
