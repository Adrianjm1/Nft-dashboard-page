import React from "react";
import "./sidebar.css";
import logo from "/img/logo.jpeg";
import jonathan from "/img/jonathan.jpeg";
import { ItemsSidebar } from "./items-sidebar/ItemsSidebar";

export const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="logo-sidebar">
        <img src={logo} alt="Logo de empresa" width="200" />
      </div>

      <div className="profile mb-5">
        <div className="profile-image">
          <img
            src={jonathan}
            className="rounded-circle "
            alt="Foto de usuario"
            width="100"
            height="100"
          />
          <div className="profile-status"></div>
        </div>
        <h5 className="profile-name">Jonathan Ray</h5>
        <p className="profile-subtitle">CEO</p>
      </div>

      <ItemsSidebar />

      <div className="sidebar-menu-bottom">
        <a href="#">
          <i className="fas fa-sign-out-alt"></i> Exit
        </a>
      </div>
    </div>
  );
};
