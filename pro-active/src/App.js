import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Client/Layout';
import LogIn from './components/Client/LogIn';
import Initial from './components/Client/InitialPage';
import SignUp from './components/Client/SignUp';
import TrainerLogIn from './components/Client/TrainerLogIn';
import TrainerSignUp from './components/Client/TrainerSignUp';
import UserHomePage from './components/Client/UserHomePage';
import Error401 from './components/Client/Error401';
import Error404 from './components/Client/Error404';
import SignUpOption from './components/Client/SignUpOption';
import TrainerHomePage from './components/Client/TrainerHomePage';

function App() 
{
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Initial />} />
        <Route path="login" element={<LogIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signupoption' element={<SignUpOption />} />
        <Route path='trainer_login' element={<TrainerLogIn />} />
        <Route path='trainer_signup' element={<TrainerSignUp />} />
        <Route path='/user_homepage/*' element={<UserHomePage />} />
        <Route path='/trainer_homepage/*' element={<TrainerHomePage />} />
        <Route path='/unauthorized' element={<Error401 />} />
        <Route path='/*' element={<Error404 />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
