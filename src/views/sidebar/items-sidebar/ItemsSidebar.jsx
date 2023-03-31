import React from "react";
import "./ItemsSidebar.css";

export const ItemsSidebar = () => {
  const itemList = [
    { cont: "Dashboard ", class: "fas fa-home-alt " },
    { cont: "PCS Token ", class: "fas fa-coins " },
    { cont: "PCS Stakin ", class: " fas fa-lock" },
    { cont: " NFTs", class: " fas fa-images" },
    { cont: "My Asset ", class: "fas fa-wallet " },
    { cont: "NFTs Stakin ", class: "fas fa-lock " },
    { cont: "Rewards ", class: "fas fa-gift " },
  ];

  return (
    <div className="sidebar-menu flex-grow-1">
      {itemList.map((data) => (
        <a href="#">
          <i className={data.class}></i> {data.cont}
        </a>
      ))}
    </div>
  );
};
