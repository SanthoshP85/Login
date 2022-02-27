import React from "react";
import Login from "./Components/Login";
import "./App.css";

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./Components/Homepage";
import Homepage from "./Components/Homepage"
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
   <Router>
      <Routes>
        
      <Route exact path='/' 
         element={user ? <Homepage /> : <Login />}/>
         <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
  </Routes>
</Router>

  );
  
}

export default App;
