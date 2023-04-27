import React, { useContext, useState, useEffect } from "react";
import "./Davomat.css";
import axios from "axios";
// import {Contextbar} from './Guruxlar'
import { useLocation } from "react-router-dom"; 

export default function BittaGuruh() {
  // const contex = useContext(Contextbar)
  // console.log(contex);
  const id = useLocation()
  console.log(id.state.id, 'bu id');
  const [groupData, setGroupData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/15ec254a9a4c2a0fcb6c")
      .then((ress) => {
        console.log(ress.data , 'bu data');
        setGroupData(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container fon">
      <div className="bittaXona ">
        <h1>Webdesign</h1>
        <h1>|</h1>
        <h1>English Beginner</h1>
        <h1>|</h1>
        <h1>Ms.Malika</h1>
      </div>
      <div className="row g-0">
        <div className="col-3">
        <div className="web_sanahifa">
                  <h4>Web design </h4>
                  <h5 className="engliw_beginner">English beginner | Malika</h5>
                 <div className="web_col">
                 <p className="nomi">Narxi:</p>
                  <h5 className="qiymati">500 000 UZS</h5>
                 </div>
                 <div className="web_col">
                 <p  className="nomi">Kunlar:</p>
                  <h5 className="qiymati">Juft kunlar</h5>
                 </div>
                 <div className="web_col">
                 <p  className="nomi">Xona:</p>
                  <h5 className="qiymati">Blue Room</h5>
                 </div>
                 <div className="web_col">
                 <p className="nomi">Boshlanish vaqti:</p>
                  <h5 className="qiymati">08:00</h5>
                 </div>
                 <div className="web_col">
                 <p className="nomi">Boshlanish sanasi:</p>
                  <h5 className="qiymati">2021-01-01</h5>
                 </div>
                 <hr className="hr"/>
               
          {groupData &&
            groupData.map((item, index) => {
              return (
              <div key={index}>
                
              </div>
              );
            })}
             </div>
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
}
