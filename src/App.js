import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { FirstPage } from './pages/First_page';
import { LoginPage } from './pages/Login_page';
import { SignUp } from './pages/SignUp_page';
import { AnimatePresence } from "framer-motion";
import { MainPage } from './pages/Home_page';
import { Profile } from './pages/Profile_page';

function App() {


  return (
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
              <Route path="/" element={<FirstPage/>}/>
              <Route path="/Login_page" element={<LoginPage/>}/>
              <Route path="/SignUp_page" element={<SignUp/>}/>
              <Route path="/Main_page" element={<MainPage />}/>
              <Route path="/Profile_page" element={<Profile/>}/>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
  );
}

export default App;