import React from "react";
import "./Home.css";
import Apex from "../Apexcharts/Apex";
import lottie from "lottie-web";
import { TiGroup } from "react-icons/ti";
import { FaUserGraduate } from "react-icons/fa";
import { ImUserTie, ImUserMinus } from "react-icons/im";
import Charts from "../SimpleRadarChart/Charts";
export default function Home() {
  return (
    <div className="">
      <div className="home_div">
        <div className="hodimlar">
          <div
            className="user_icon"
            style={{ display: "inline-block", fontSize: "50px" }}
          >
            <ImUserTie />
          </div>
          <h1 className="list_son">56</h1>
          <h6 className="list_name">Hodimlar</h6>
        </div>
        <div className="talabalar">
          <div
            className="user_icon_ta"
            style={{ display: "inline-block", fontSize: "50px" }}
          >
            <FaUserGraduate />
          </div>
          <h1 className="list_son_ta">258</h1>
          <h6 className="list_name_talabalar">Faol talabalar</h6>
        </div>
        <div className="guruhlar">
          <div
            className="user_icon_gr"
            style={{ display: "inline-block", fontSize: "50px" }}
          >
            <TiGroup />
          </div>
          <h1 className="list_son_gr">135</h1>
          <h6 className="list_name_gr">Guruhlar</h6>
        </div>
        <div className="qarzdorlar">
          <div
            className="user_icon_qarz"
            style={{ display: "inline-block", fontSize: "50px" }}
          >
            <ImUserMinus />
          </div>
          <h1 className="list_son_qarz">56</h1>
          <h6 className="list_name_qarz">Qarzdorlar</h6>
        </div>
      </div>

      <div className="apex">
        <div className="apex_1">
        <Apex />
        </div>
        <div className="apex_1">
        <Charts />
        </div>
      </div>
    </div>
  );
}
