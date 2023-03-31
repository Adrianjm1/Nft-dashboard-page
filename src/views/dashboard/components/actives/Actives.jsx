import React from "react";
import "./actives.css";
import icono from "../../../../../public/img/icono.png";
import nft from "../../../../../public/img/nft.png";

const Actives = () => {
  const arrayList = ["PC5 ", "PC5", "NFTs", "NFTs", "NFTs"];

  return (
    <div className=" bg-light-blue  rounded-box d-flex  actives-container ">
      <div className="col-2 ">
        <h2 className="title">Activos</h2>
        <p className="info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
          dolor. met mollitia, odit placeat corporis placeat
        </p>
      </div>
      <div className="flex-grow-1 actives-list d-flex justify-content-evenly align-items-center">
        {arrayList.map((index, data) => (
          <div className="active rounded-box ">
            <div className="active-icon bg-blue  d-flex align-items-center  justify-content-center">
              {index !== "PC5" ? (
                <img src={nft} alt="" />
              ) : (
                <img src={icono} alt="" />
              )}
            </div>
            <div className="active-info">
              <p className="semi-bold">{data}</p>
              <p className="bold">TOKEN</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actives;
