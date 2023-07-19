
import {Route , Routes , Navigate} from 'react-router-dom';

//Components
import SignUp from './Components/SignUp';
import Login from './Components/Login';



function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login'  element={<Login />} />
        <Route path='*' element={<Navigate to='/signup' />} />
      </Routes>
    </>
  );
}

export default App;
