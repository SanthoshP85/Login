import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homepage.css";
import { logout, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  let navigate = useNavigate();
  const logout = (e) => {
    dispatch(logout());
    navigate.push("/login");

  };

  return (
    <form className="logout">
       <button className="logout__button" onClick={(e) => logout(e)}>
        Log out
      </button>
      <h1>
        Welcome <span className="user__name">{user.name} </span>to the home page
      </h1>
     
    </form>
  );
};

export default Logout;
