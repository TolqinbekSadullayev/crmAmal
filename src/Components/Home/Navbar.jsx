import React, {useState} from "react";
import {FcHome} from "react-icons/fc";
import {HiUserGroup} from "react-icons/hi";
import {FaUserTie, FaMonero,FaUserGraduate} from "react-icons/fa";
import {MdMeetingRoom} from "react-icons/md";
import {ImExit} from "react-icons/im";
import "./Navbar.css";
import { Button, Dropdown } from 'antd';
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("Ru");
  const changeLanguage = (til) => {
    if (til === "Ru") {
      localStorage.setItem("language", "Ru")
      setLang("Ru");
    }
    if (til === "En") {
      localStorage.setItem("language", "En")
      setLang("En");
    }
    if (til === "Uz") {
      localStorage.setItem("language", "Uz")
      setLang("Uz");
    }
    i18n.changeLanguage(til);
  }
  const items = [
    {
      key: '1',
      label: (
        <a  rel="noopener noreferrer" href="/about">
          {t("N_about")}
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a  rel="noopener noreferrer" href="/">
          {t("N_chiqish")}
        </a>
      ),
    },
  ];

  
  return (
    <div>
      
        <div className="Navbarleft ">
          <div>
            <ul>
              <li>
                <Link to={"/home"}><FcHome/> {t("N_bosh")}</Link>
              </li>
              <li>
                <Link to={"/guruxlar"}><a href="#"><HiUserGroup/>  {t("N_gurux")}</a></Link>
              </li>
              <li>
                <Link to={"/hodimlar"}><a href="#"><FaUserTie/>  {t("N_Xodimlar")}</a></Link>
              </li>
              <li>
                <Link to={'/xonalar'}><a href="#"><MdMeetingRoom/> {t("N_xonalar")}</a></Link>
              </li>
              <li>
                <Link to={"/talabalar"}><a href="#"><FaUserGraduate/> {t("N_Talabalar")}</a></Link>
              </li>
              <li>
                <Link to={"/xarajat"}><a href="#"><FaMonero/>  {t("N_Moliya")}</a></Link>
              </li>
            </ul>
          </div>
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
      <Button><ImExit/>   {t("N_chiqish")}</Button>
    </Dropdown>
          </div>
        </div>
    </div>
  );
}
