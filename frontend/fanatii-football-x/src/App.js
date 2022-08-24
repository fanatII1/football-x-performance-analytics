import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Homepage from './Components/Homepage/Homepage';

function App() {

    return(
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/> 
            <Route path='/Login' element={<Login/>}/> 
            <Route path='/SignUp' element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
