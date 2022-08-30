import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Homepage from './Components/Homepage/Homepage';
import GlobalSearch from './Components/GlobalSearchPage/GlobalSearch';
import ClubSearch from './Components/ClubSearch/ClubSearch'
import Articles
 from './Components/ArticlesPage/Articles';

function App() {

    return(
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/> 
            <Route path='/Login' element={<Login/>}/> 
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/GlobalSearch' element={<GlobalSearch/>}/>
            <Route path='/GlobalSearch/ClubSearch' element={<ClubSearch/>}/>
            <Route path='/Articles' element={<Articles/>}/>
          </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
