import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const reducers = combineReducers({});

const setupStore = () => configureStore({ reducer: reducers });

const ReduxWrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider store={setupStore()}>{children}</Provider>
);

export default ReduxWrapper;
