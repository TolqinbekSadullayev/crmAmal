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
  const [click_group, setGroup] = useState(true)
  const [click_xodim, setXodim] = useState(true)
  const [click_xonalar, setXonalar] = useState(true)
  const [click_talabalar, setTalabalar] = useState(true)
  const [click_moliya, setMoliya] = useState(true)
  const [click_home, setHome] = useState(true)
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

  function click_guruh(){
    setGroup(false)
    setXodim(true)
    setTalabalar(true)
    setXonalar(true)
    setMoliya(true)
    setHome(true)
  }

  function click_Xodim(){
    setGroup(true)
    setXodim(false)
    setTalabalar(true)
    setXonalar(true)
    setMoliya(true)
     setHome(true)
  }

  function click_Xonalar(){
    setXonalar(false)
    setGroup(true)
    setXodim(true)
    setTalabalar(true)
    setMoliya(true)
     setHome(true)
  }

  function click_Talabalar(){
    setTalabalar(false)
    setXonalar(true)
    setGroup(true)
    setXodim(true)
    setMoliya(true)
     setHome(true)
  }

  function click_Moliya(){
    setMoliya(false)
    setTalabalar(true)
    setXonalar(true)
    setGroup(true)
    setXodim(true)
    setHome(true)
  }
  function click_Home(){
    setHome(false)
    setMoliya(true)
    setTalabalar(true)
    setXonalar(true)
    setGroup(true)
    setXodim(true)
  }
  
  return (
    <div className="Navv">
        <div className="Navbarleft ">
          <div>
            <ul>
            <Link to={"/home"}><li className={(click_home) ? '' : "li_click"} onClick={click_Home} >
                <FcHome/> {t("N_bosh")}
              </li></Link>
              <Link to={"/guruxlar"}> <li className={(click_group) ? '' : 'li_click'} onClick={click_guruh}>
                 <HiUserGroup/>  {t("N_gurux")}
              </li></Link>
              <Link to={"/hodimlar"}> <li className={(click_xodim) ? '' : 'li_click'} onClick={click_Xodim}>
                  <FaUserTie/>  {t("N_Xodimlar")}
              </li></Link>
              <Link to={'/xonalar'}> <li className={(click_xonalar) ? '' : 'li_click'} onClick={click_Xonalar}>
                 <MdMeetingRoom/> {t("N_xonalar")}
              </li></Link>
              <Link to={"/talabalar"}> <li className={(click_talabalar) ? '' : 'li_click'} onClick={click_Talabalar}>
                 <FaUserGraduate/> {t("N_Talabalar")}
              </li></Link>
              <Link to={"/xarajat"}><li className={(click_moliya) ? '' : 'li_click'} onClick={click_Moliya}>
                 <FaMonero/>  {t("N_Moliya")}
              </li></Link>
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
