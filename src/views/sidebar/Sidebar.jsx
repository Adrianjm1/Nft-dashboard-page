import React from "react";
import "./sidebar.css";
import logo from "../../../public/img/logo.jpeg";
import jonathan from "../../../public/img/jonathan.jpeg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo de empresa" width="200" />
      <br />
      <br />
      <div className="profile">
        <div className="profile-image">
          <img
            src={jonathan}
            className="rounded-circle"
            alt="Foto de usuario"
            width="100"
            height="100"
          />
          <div className="profile-status"></div>
        </div>
        <h5 className="profile-name">Jonathan Ray</h5>
        <p className="profile-subtitle">CEO</p>
      </div>
      <br />
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-coins"></i> PCS Token
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-lock"></i> PCS Staking
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-images"></i> NFTs
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-wallet"></i> My Assets
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-lock"></i> NFTs Staking
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-gift"></i> Rewards
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-plus"></i> Más
          </a>
        </li>
      </ul>
      <ul className="sidebar-menu-bottom">
        <li>
          <a href="#">
            <i className="fas fa-sign-out-alt"></i> Exit
          </a>
        </li>
      </ul>
    </div>
  );
};
