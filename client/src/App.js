import './App.css';
import LoginPage from './components/login/login';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/signup/signup';
import SketchPage from './components/sketch/sketch';
import NavBar from './components/navBar/navBar';
import { createContext, useState } from 'react';

export const context = createContext(null)


function App() {


  const [name, setName] = useState("")


  return (
    <context.Provider value={{
      name: name,
      setName: setName
    }}>

      <div className="bg_container">
        <NavBar />
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/sketch' element={<SketchPage />} />
        </Routes>
      </div>
    </context.Provider>
    // <div>
    //   <div className='logoContainer'>
    //     <p>Logo</p>
    //   </div>
    //   <div className="App">
    //     <Routes>
    //       <Route exact path="/login" element={<LoginPage />} />
    //       <Route exact path='/signup' element={<SignUp />} />
    //       <Route exact path='/sketch' element={<SketchPage />} />
    //     </Routes>
    //   </div>
    // </div>
  );
}

export default App;
