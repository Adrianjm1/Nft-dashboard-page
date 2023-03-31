import React from "react";
import { Chart } from "./components/chart/Chart";
import Actives from "./components/actives/Actives";
import Nft from "./components/nft/Nft";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="main-content d-flex flex-column gap-4 ">
      <div className="d-flex  ">
        <Nft />
        <Chart />
      </div>
      <Actives />
    </div>
  );
};
