import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Homepage from './Components/Homepage/Homepage';
import GlobalSearch from './Components/GlobalSearchPage/GlobalSearch';
import ClubSearch from './Components/ClubSearch/ClubSearch'
import Articles from './Components/ArticlesPage/Articles';

//club routes
import KaizerChiefs from './Components/ClubsPages/KaizerChiefs/KaizerChiefs';
import OrlandoPirates from './Components/ClubsPages/OrlandoPirates/OrlandoPirates';
import NameSearch from './Components/NameSearch/NameSearch';
import Admin from './Components/Admin_Writer/Admin';

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
            <Route path='/GlobalSearch/ClubSearch/KaizerChiefs' element={<KaizerChiefs/>}/>
            <Route path='/GlobalSearch/ClubSearch/OrlandoPirates' element={<OrlandoPirates/>}/>
            <Route path='/GlobalSearch/NameSearch/' element={<NameSearch/>}/>
            <Route path='/Admin' element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
