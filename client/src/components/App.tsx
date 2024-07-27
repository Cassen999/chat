import { useContext } from 'react'
import '../styles/index.scss';
import Login from './Login';
import { GlobalContext, iGlobalContext } from './globalProvider/GlobalProvider';

function App() {
  const { id } = useContext(GlobalContext) as iGlobalContext;

  return (
    <>
      {id}
      <Login />
    </>
  )
}

export default App
