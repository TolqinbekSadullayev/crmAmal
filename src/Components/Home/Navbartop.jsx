import React from 'react'
import logo_img from "../img/logo_img.png";
import uz from "../img/uz.png";
import ru from "../img/ru.png";
import en from "../img/en.png";
import { AiOutlineSearch} from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Navbartop() {
    const linkStyle = {
        textDecoration: "none",
        color: 'black'
      };
  return (
    <div>
        <div className="top_section d-flex justify-content-around">
         <Link to={'/'} style={linkStyle}>
         <div className="logo ms-0">
         <img className="logoimg" src={logo_img} alt="logo_img" />
         <h3>CRM</h3>
         </div>
         </Link>
         <div className="input_div"><input placeholder="Search..." type="text"  /><AiOutlineSearch style={{ fontSize: '30', marginTop: '5'}}/></div>
         <div>
            <select name="" id="">
               <option value="">UZ <img style={{width:'10'}} src={uz} alt="uz" /></option>
               <option value="">EN <img style={{width:'10'}} src={en} alt="en" /></option>
               <option value="">RU <img style={{width:'10'}} src={ru} alt="ru" /></option>
            </select>
         </div>
      </div>
    </div>
  )
}
