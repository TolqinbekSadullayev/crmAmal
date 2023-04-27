import React from "react";
import logo_img from "../img/logo_img.png";
import uz from "../img/uz.png";
import ru from "../img/ru.png";
import en from "../img/en.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Select } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export default function Navbartop() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className="top_section d-flex justify-content-around">
        <Link to={"/"} style={linkStyle}>
          <div className="logo ms-0">
            <img className="logoimg" src={logo_img} alt="logo_img" />
            <h3>CRM</h3>
          </div>
        </Link>
        <div className="">
          <Space direction="vertical">
            <Search
              placeholder="Search..."
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Space>
        </div>
        <div>
          <Select
            labelInValue
            defaultValue={{
              value: "UZ",
              label: "Uz",
            }}
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "UZ",
                label: "UZ ",
              },
              {
                value: "EN",
                label: "EN",
              },
              {
                value: "RU",
                label: "RU",
              },
            ]}
          />
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
