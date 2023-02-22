import React from "react";
import tatalogo from "../images/Tata-Group-logo-3840x2160 3.png";
const HomeCard2 = () => {
  return (
    <div className="w-[250px] p-2 rounded-xl bg-slate-700 text-start">
      <img src={tatalogo} />
      <p className="text-[18px] font-semibold">
        Tata Capital Housing Finance Ltd
      </p>
      <p className="text-[14px] text-slate-400">Lead Arranger</p>
      <p className="text-[12px] text-slate-400">February 2022</p>
      <div className="flex justify-center">
        <button className=" border text-[14px] rounded-2xl text-center px-3 py-1 my-3">
          INR 500 mn
        </button>
      </div>
    </div>
  );
};

export default HomeCard2;
