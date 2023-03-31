import React from "react";
import "./nft.css";

const Nft = () => {
  const arrayCollection = ["Collection 1", "Collection 2", "Collection 3"];

  return (
    <div className=" col-4 rounded-box bg-blue nft-square">
      <div>
        <div className="d-flex flex-column justify-content-between gap-3">
          <h5 className=" text-white title-nft">NFTs</h5>

          <p className="link-nft text-white">
            LINK REFERIDO <i className="fas fa-copy"></i>{" "}
          </p>
        </div>
        <div className="d-flex flex-column gap-3   mt-5 mb-3 ">
          {arrayCollection.map((data) => (
            <button
              type="button"
              className="btn text-white  item-collection-button w-100 d-flex bg-dark-blue align-items-center "
            >
              <span className="icon-image "></span>
              <span className="ms-4">{data} </span>
            </button>
          ))}
        </div>
        <button type="button" className=" rounded-box  btn-nft ">
          <span>SEE MORE</span>
        </button>
      </div>
    </div>
  );
};

export default Nft;
