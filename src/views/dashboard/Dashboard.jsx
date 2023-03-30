import React from "react";
import { Chart } from "./chart/Chart";
import Actives from "./components/actives/Actives";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="main-content d-flex flex-column gap-4 ">
      <div className="d-flex  flex-grow ">
        <div className=" card  col-4 rounded-box bg-blue ">
          <div className="card-body m-0">
            <h5 className="card-title text-white">NFTs</h5>
            <h6 className="card-subtitle mb-2 text-muted">Link referido</h6>
            <div
              className="d-flex flex-column align-items-center"
              style={{ height: "300px", width: "300px" }}
            >
              <div className="mb-2 flex-fill mx-auto w-75">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill w-100 d-flex align-items-center "
                >
                  <i className="fa-solid fa-user mx-2"></i>
                  <span className="ml-4 p-1">Collection 1</span>
                </button>
              </div>
              <div className="mb-2 flex-fill mx-auto w-75">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill w-100 d-flex  align-items-center "
                >
                  <i className="fa-solid fa-user mx-2"></i>
                  <span className="ml-4 p-1">Collection 2</span>
                </button>
              </div>
              <div className="mb-2 flex-fill mx-auto w-75">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill w-100 d-flex align-items-center "
                >
                  <i className="fa-solid fa-user mx-2"></i>
                  <span className="ml-4 p-1">Collection 3</span>
                </button>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary rounded-pill  d-flex align-items-center justify-content-between"
            >
              <span>See more</span>
            </button>
          </div>
        </div>

        <div className=" flex-grow-1 card rounded-box ms-4 "></div>
      </div>
      <Actives />
    </div>
  );
};
