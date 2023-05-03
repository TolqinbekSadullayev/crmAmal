import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { FaUserTie, FaMonero, FaUserGraduate } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { ImExit } from "react-icons/im";
import "./Navbar.css";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

defineElement(lottie.loadAnimation);

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("Ru");
  const [click_group, setGroup] = useState(true);
  const [click_xodim, setXodim] = useState(true);
  const [click_xonalar, setXonalar] = useState(true);
  const [click_talabalar, setTalabalar] = useState(true);
  const [click_moliya, setMoliya] = useState(true);
  const [click_home, setHome] = useState(false);
  const changeLanguage = (til) => {
    if (til === "Ru") {
      localStorage.setItem("language", "Ru");
      setLang("Ru");
    }
    if (til === "En") {
      localStorage.setItem("language", "En");
      setLang("En");
    }
    if (til === "Uz") {
      localStorage.setItem("language", "Uz");
      setLang("Uz");
    }
    i18n.changeLanguage(til);
  };
  const items = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="/about">
          {t("N_about")}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a rel="noopener noreferrer" href="/">
          {t("N_chiqish")}
        </a>
      ),
    },
  ];

  function click_Home() {
    setHome(false);
    setMoliya(true);
    setTalabalar(true);
    setXonalar(true);
    setGroup(true);
    setXodim(true);
  }


  function click_guruh() {
    setGroup(false);
    setXodim(true);
    setTalabalar(true);
    setXonalar(true);
    setMoliya(true);
    setHome(true);
  }

  function click_Xodim() {
    setGroup(true);
    setXodim(false);
    setTalabalar(true);
    setXonalar(true);
    setMoliya(true);
    setHome(true);
  }

  function click_Xonalar() {
    setXonalar(false);
    setGroup(true);
    setXodim(true);
    setTalabalar(true);
    setMoliya(true);
    setHome(true);
  }

  function click_Talabalar() {
    setTalabalar(false);
    setXonalar(true);
    setGroup(true);
    setXodim(true);
    setMoliya(true);
    setHome(true);
  }

  function click_Moliya() {
    setMoliya(false);
    setTalabalar(true);
    setXonalar(true);
    setGroup(true);
    setXodim(true);
    setHome(true);
  }
 
  return (
    <div className="Navv">
      <div className="Navbarleft ">
        <ul className="navbar_left_ul">
          <li className={click_home ? "" : "li_click"} onClick={click_Home}>
            <Link
              to={"/home"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <lord-icon
                src="https://cdn.lordicon.com/gmzxduhd.json"
                trigger="hover"
                colors="primary:#121331,secondary:#2516c7"
                style={{ width: "32px", height: "32px" }}
              ></lord-icon>

              {t("N_bosh")}
            </Link>
          </li>
          <li>
            <Link
              to={"/guruxlar"}
              className={click_group ? "" : "li_click"}
              onClick={click_guruh}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "22px",
              }}
            >
              <div style={{ fontSize: "25px", marginTop: "-10px" }}>
                {" "}
                <HiUserGroup />
              </div>
              {t("N_gurux")}
            </Link>
          </li>
          <li>
            <Link
              to={"/hodimlar"}
              className={click_xodim ? "" : "li_click"}
              onClick={click_Xodim}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ fontSize: "25px", marginTop: "-10px" }}>
                {" "}
                <FaUserTie />
              </div>
              {t("N_Xodimlar")}
            </Link>
          </li>
          <li>
            <Link
              to={"/xonalar"}
              className={click_xonalar ? "" : "li_click"}
              onClick={click_Xonalar}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "26px",
              }}
            >
              <div style={{ fontSize: "25px", marginTop: "-10px" }}>
                {" "}
                <MdMeetingRoom />{" "}
              </div>
              {t("N_xonalar")}
            </Link>
          </li>
          <li>
            <Link
              to={"/talabalar"}
              className={click_talabalar ? "" : "li_click"}
              onClick={click_Talabalar}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ fontSize: "25px", marginTop: "-10px" }}>
                <FaUserGraduate />
              </div>
              {t("N_Talabalar")}
            </Link>
          </li>
          <li>
            <Link
              to={"/xarajat"}
              className={click_moliya ? "textLight" : "li_click"}
              onClick={click_Moliya}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                marginLeft:'-12px'
              }}
            >
              <div style={{ fontSize: "25px", marginTop: "-10px" }}>
                <FaMonero />
              </div>
              {t("N_Moliya")}
            </Link>
          </li>
        </ul>
        {/* </div> */}
        <div className="chiq">
          {/* <Link><a href=""><ImExit/> chiqish</a></Link> */}
          <Dropdown
            menu={{
              items,
            }}
            placement="top"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button>
              <ImExit /> {t("N_chiqish")}
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
