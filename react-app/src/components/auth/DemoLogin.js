import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';

const DemoLogin = () => {
  const dispatch = useDispatch()
  const onDemoLogin = async (e) => {
    await dispatch(login("demo@aa.io", "password"));
  };

  return <button onClick={onDemoLogin}>Login as Demo User</button>;
};

export default DemoLogin;
