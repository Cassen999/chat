import React, { useContext, useEffect } from 'react';
import '../styles/index.scss';
import { Login } from './Login';
import useLocalStorage from './hooks/useLocalStorage';

export const App = () => {
  const [value, setValue] = useLocalStorage('id');

  useEffect(() => {
    console.log(value);
  }, [value])

  return (
    <>
      {value}
      <Login setValue={setValue} />
    </>
  )
}
