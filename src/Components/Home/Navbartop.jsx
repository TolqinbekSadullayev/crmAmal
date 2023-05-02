import React, { useState,useEffect } from "react";
import logo_img from "../img/logo_img.png";
import uz from "../img/uz.png";
import ru from "../img/ru.png";
import en from "../img/en.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { Button, Dropdown } from "antd";
import imgav from '../img/logo_img.png'

export default function Navbartop() {
  const [state, setState] = useState({});
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("Uz");
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
  const handleChange = (value) => {
    console.log(value);
  };
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

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
    <div>
      <div className="top_section d-flex justify-content-around">
        <Link to={"/home"} style={linkStyle}>
          <div className="logo ms-0">
            <img className="logoimg" src={logo_img} alt="logo_img" />
            <h3>CRM</h3>
          </div>
        </Link>
        <div className="">
          <Space direction="vertical">
            <Search
              placeholder={t("Nt_search")}
              allowClear
              enterButton={t("Nt_search")}
              size="large"
              onSearch={onSearch}
            />
          </Space>
        </div>
          
        <div className="d-flex">
        <div className="d-flex me-2 ">
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            <p>Time:</p>
          <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
            </p>
          </div>
           <div>
           <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow
            >
              <Button>{t("Tili")}</Button>
            </Dropdown>
          
           </div>
        </div>
        <Link to={'/account'} style={linkStyle}><div className="d-flex justify-content-center ava">
          <Space direction="" size={16}>
            <Space wrap size={16}>
              <Avatar src={imgav} size="large" icon={<UserOutlined />} />
            </Space>
          </Space>
          <h5 className="mt-2 ms-1">Crm admin</h5>
        </div></Link>
      </div>
    </div>
  );
}
