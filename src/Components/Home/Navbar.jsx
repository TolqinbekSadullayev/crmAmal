import React from "react";
import {FcHome} from "react-icons/fc";
import {HiUserGroup} from "react-icons/hi";
import {FaUserTie, FaMonero,FaUserGraduate} from "react-icons/fa";
import {MdMeetingRoom} from "react-icons/md";
import {ImExit} from "react-icons/im";
import "./Navbar.css";
import { Button, Dropdown } from 'antd';

import { Link } from "react-router-dom";
export default function Navbar() {
  const items = [
    {
      key: '1',
      label: (
        <a  rel="noopener noreferrer" href="/">
          Account haqida
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a  rel="noopener noreferrer" href="/">
          Boshqa account
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a  rel="noopener noreferrer" href="/">
          Chiqish
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
                <Link to={"/"}><a href="/"><FcHome/> Bosh Sahifa</a></Link>
              </li>
              <li>
                <Link to={"/guruxlar"}><a href="#"><HiUserGroup/>  Guruxlar</a></Link>
              </li>
              <li>
                <Link to={"/hodimlar"}><a href="#"><FaUserTie/>  Xodimlar</a></Link>
              </li>
              <li>
                <Link to={'/xonalar'}><a href="#"><MdMeetingRoom/> Xonalar</a></Link>
              </li>
              <li>
                <Link to={"/talabalar"}><a href="#"><FaUserGraduate/> Talabalar</a></Link>
              </li>
              <li>
                <Link to={"/xarajat"}><a href="#"><FaMonero/>  Moliya</a></Link>
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
      <Button><ImExit/>   chiqish</Button>
    </Dropdown>
          </div>
        </div>
    </div>
  );
}
