import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Client/Layout';
import LogIn from './components/Client/LogIn';
import Initial from './components/Client/InitialPage';
import SignUp from './components/Client/SignUp';
import SignUp2 from './components/Client/SignUp2';
import TrainerLogIn from './components/Client/TrainerLogIn';
import TrainerSignUp from './components/Client/TrainerSignUp';
import TrainerSignUp2 from './components/Client/TrainerSignUp2';
import UserHomePage from './components/Client/UserHomePage';

function App() 
{
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Initial />} />
        <Route path="login" element={<LogIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signup2' element={<SignUp2 />} />
        <Route path='trainer_login' element={<TrainerLogIn />} />
        <Route path='trainer_signup' element={<TrainerSignUp />} />
        <Route path='trainer_signup2' element={<TrainerSignUp2 />} />
        <Route path='user_homepage' element={<UserHomePage />} />
      </Route>
    </Routes>
    </>

    
  );

 

      
  


}

export default App;
