import React, {useState} from "react";
import "./Home.css";
import Apex from "../Apexcharts/Apex";
import lottie from "lottie-web";
import { TiGroup } from "react-icons/ti";
import { FaUserGraduate } from "react-icons/fa";
import { ImUserTie, ImUserMinus } from "react-icons/im";
import Charts from "../SimpleRadarChart/Charts";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
export default function Home() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("En");
  const changeLanguage = (til) => {
    if (til === "Ru") {
      setLang("Ru");
    }
    if (til === "En") {
      setLang("En");
    }
    if (til === "Uz") {
      setLang("Uz");
    }
    i18n.changeLanguage(til);
  };
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
          <h6 className="list_name">{t("N_Xodimlar")}</h6>
        </div>
        <div className="talabalar">
          <div
            className="user_icon_ta"
            style={{ display: "inline-block", fontSize: "50px" }}
          >
            <FaUserGraduate />
          </div>
          <h1 className="list_son_ta">258</h1>
          <h6 className="list_name_talabalar">{t("Ftalabalar")}</h6>
        </div>
        <div className="guruhlar">
          <div
            className="user_icon_gr"
            style={{ display: "inline-block", fontSize: "50px" }}
          >
            <TiGroup />
          </div>
          <h1 className="list_son_gr">135</h1>
          <h6 className="list_name_gr">{t("N_gurux")}</h6>
        </div>
        <div className="qarzdorlar">
          <div
            className="user_icon_qarz"
            style={{ display: "inline-block", fontSize: "50px" }}
          >
            <ImUserMinus />
          </div>
          <h1 className="list_son_qarz">56</h1>
          <h6 className="list_name_qarz">{t("Qarzdor")}</h6>
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
