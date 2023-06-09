import React, { useState,useEffect } from "react";
import logo_img from "../img/logo_img.png";
import uz from "../img/uz.png";
import ru from "../img/ru.png";
import en from "../img/en.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { Button, Dropdown } from "antd";
import "./Navbartop.css";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

export default function Navbartop() {
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
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => changeLanguage("Uz")}
        >
          Uz <img src={uz} alt="en" style={{ width: "30px", height: "30px" }} />
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => changeLanguage("Ru")}
        >
          Ru <img src={ru} alt="en" style={{ width: "30px", height: "30px" }} />
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => changeLanguage("En")}
        >
          En <img src={en} alt="en" style={{ width: "30px", height: "30px" }} />
        </a>
      ),
    },
  ];

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div className="NavbarTop">
      <div className="top_section ">
        <div className="logo ms-0">
           <div className="home_logo">
           <img className="logoimg" src={logo_img} alt="logo_img" />
            <h3 className="crm">CRM</h3>
           </div>
          <lord-icon
            src="https://cdn.lordicon.com/iltqorsz.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#e5d1fa"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>

    <div className="nav_search1">
   <span className="search_icon1">
   <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: "26px", height: "26px" }}
          ></lord-icon>
   </span>
          <input type="text" placeholder={t("Nt_search")} className="nav_input1" />
    </div>

    <div className="d-flex  clock mt-2">
       
            <h6>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </h6>
            
          <h6 className="ms-3">
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
            </h6>
          
           
        </div>
        <div className="navbartop_right">
          {/* <div className="line"></div> */}
          <div>
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              arrow
              className="dropp_now"
            >
              <Button>{t("Tili")}</Button>
            </Dropdown>
          </div>

          <div className="line"></div>

          <lord-icon
            src="https://cdn.lordicon.com/wxnxiano.json"
            trigger="morph"
            colors="primary:#ffffff,secondary:#d4d1fa"
            stroke="70"
            state="morph"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>

          <div className="line"></div>

          <Link to={"/account"} style={linkStyle}>
            <div className="d-flex justify-content-center align-items-center">
              <lord-icon
                src="https://cdn.lordicon.com/dxjqoygy.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h5 className="userName">{t("User_name")}</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}