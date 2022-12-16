import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { UserDetails } from './pages/UserDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage />}></Route>
      <Route exact path='/users' element={<UserDetails />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
