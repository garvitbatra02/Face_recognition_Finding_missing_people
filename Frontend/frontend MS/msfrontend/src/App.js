
import Missingcard from './components/find_loc/Missingcard';
import MissingList from './components/find_loc/MissingList';
// import SearchButton from './components/find_loc/SearchButton';
import Home from './components/Home/Home';
import Formmissing from './components/missing form/Formmissing';
import Navbar from './components/navbar/Navbar';
import PersonCard from "./components/missing_list/PersonCard"
import Missing_persons from './components/missing_list/Missing_persons';
import Hero from './components/Hero/Hero';
import {
  BrowserRouter as Router,
 
  Route,
  Routes,
 
} from "react-router-dom";
function App() {
  return (
    <div>
     
      {/* <Navbar/> */}
       {/* <Formmissing/> */}
      {/* <Home/> */}
      {/* <Missingcard/> */}
      {/* <MissingList/> */}
      {/* <SearchButton/> */}
      {/* <PersonCard/> */}
      
      {/* <Navbar/> */}
      {/* <Missing_persons/> */}
      {/* <Hero/> */}
      <Router>
        <Navbar/>
      
      
       <Routes>   
          <Route path="/" element={<Hero/>} ></Route>
          <Route path="/Formmissing" element={<Formmissing/>}></Route>
          <Route path="/Missingpeople" element={<Missing_persons/>}></Route>
          <Route path="/locations" element={<MissingList/>}></Route>
    
          

        </Routes>
      
   
      </Router>
    </div>
  );
}

export default App;
