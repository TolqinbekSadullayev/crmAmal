import React, {useState, useEffect} from "react";
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
import { t } from 'i18next'
import { Button, Dropdown } from 'antd';


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
    <div className="NavbarTop">
      <div className="top_section ">
        <div className="logo ms-0">
          <Link to={"/home"} className="home_logo">
            <img className="logoimg" src={logo_img} alt="logo_img" />
            <h3 className="crm">CRM</h3>
          </Link>
          <lord-icon
    src="https://cdn.lordicon.com/iltqorsz.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#e5d1fa"
    style={{width:'40px', height:'40px'}}>
</lord-icon>
        </div>

    <div className="nav_search">
   <span className="search_icon">
   <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: "26px", height: "26px" }}
          ></lord-icon>
   </span>
          <input type="text" placeholder={t("Nt_search")} className="nav_input" />
    </div>

        <div className="navbartop_right">
          {/* <div className="line"></div> */}
          <div>
            <Dropdown
              menu={{items, }}
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

          <div className="d-flex justify-content-center align-items-center">
            <lord-icon
              src="https://cdn.lordicon.com/dxjqoygy.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <h5 className="userName">User Name</h5>
          </div>
        </div>

        {/* <div className="">
          <Space direction="vertical">
            <Search
              placeholder={t("Nt_search")}
              allowClear
              enterButton={t("Nt_search")}
              size="large"
              onSearch={onSearch}
            />
          </Space>
  </div>*/}
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
        <div className="d-flex justify-content-center">
          <Space direction="" size={16}>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Space>
          <h5>User Name</h5>
        </div>
      </div>
    </div>
  );
}
