import React, {useState, useEffect } from "react";
import "./Davomat.css";
import axios from "axios";
import { useParams } from "react-router-dom"; 
import {BsThreeDots, BsPencilSquare} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function BittaGuruh() {
  const id = useParams()
  console.log(id.id, 'bu id');
  const [obj, setGroupObj] = useState();
  const [davomat, setDavomat] = useState(true)
  const [davomat2, setDavomat2] = useState(true)
  const [modal, setModal] = useState(false)
  const [bor, setBor] = useState(false)
  const [yuq, setYuq] = useState(false)
  useEffect(() => {
    axios
      .get(`https://644a7136a8370fb3214ec646.mockapi.io/nimadr/group`)
      .then((ress) => {
        console.log(ress.data , 'bu data');
       let object =  ress.data.find((item, index) =>{
              return (item.id == id.id)
            })
            setGroupObj(object)
          })
          .catch((err) => {
            console.log(err);
          });
        }, []);
        console.log(obj);


        function davomat_title() {
          setDavomat2(true)
          setDavomat(true)
        }

        function davomat_title_2() {
          setDavomat2(false)
          setDavomat(false)
        }

        function molad_chiq(){
          setModal(!modal)
        }

        function Bor(){
          setBor(true)
          setYuq(false)
        }

        function Yuq(){
          setYuq(true)
        }

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
                 <div className="d-flex justify-content-around" style={{gap: '70px'}}>
                 <h4 className="web_design">Web design </h4>
                <div style={{color: '#7338AC', fontSize: '20px'}}> <BsPencilSquare/>  <RiDeleteBin6Line/></div> 
                 </div>
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
                <p className="hr"></p>
                <div className="web_sanahifa_bootom" >
                  <ul>
                    <li className='bold_name'>Name</li>
                    <li>Omadbek</li>
                    <li>Omadbek</li>
                    <li>Omadbek</li>
                    <li>Omadbek</li>
                    <li>Omadbek</li>
                    <li>Omadbek</li>
                    <li>Omadbek</li>
                    <li>Omadbek</li>
                  </ul>
                  <ul>
                    <li className='bold_name'>Phone</li>
                    <li>94 778 33 73</li>
                    <li>94 778 33 73</li>
                    <li>94 778 33 73</li>
                    <li>94 778 33 73</li>
                    <li>94 778 33 73</li>
                    <li>94 778 33 73</li>
                    <li>94 778 33 73</li>
                    <li>94 778 33 73</li>
                  </ul>
                  <ul className="btn_ul">
                    <li className='bold_name'>Actions</li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                    <li> <div className="btn_more"><span className="dot"><BsThreeDots/></span></div> </li>
                  </ul>
                </div>
          
             </div>
        </div>
        <div className="col-9">
          <div className="davomat_title">
            <h3 className={(davomat) ? 'active_davomat' : 'in_active' } onClick={davomat_title}>Davomat</h3>
            <h3 className={(davomat2) ? 'in_active' : 'active_davomat'} onClick={davomat_title_2}>Davomat</h3>
          </div>
          <div className="jadval d-flex">
            <ul className="jadval_ismlar">
              <li>Name</li>
              <li>Elbek</li>
              <li>Elbek</li>
              <li>Elbek</li>
              <li>Elbek</li>
              <li>Elbek</li>
              <li>Elbek</li>
            </ul>
            <ul className="jadval_davomati">
              <li className="jadval_sana">
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
                <p>22-yan</p>
               
              </li>
              <li>
              <p className={(!bor) ? 'chekkid': (yuq) ? 'chekkid yuq' : 'chekkid bor'} onClick={molad_chiq}>
                <div className={(!modal) ? 'd-none' : "modal_" }>
                    <div className="bor_m" onClick={Bor}>Y</div>
                    <div className="yuq_m" onClick={Yuq}>S</div>
                </div>
                </p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                <p className="chekkid bor"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                {/* <p className="chekkid"></p> */}
              </li>
              <li>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                <p className="chekkid bor"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                {/* <p className="chekkid"></p> */}
              </li>
              <li>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid bor"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                {/* <p className="chekkid yuq"></p> */}
              </li>
              <li>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid bor"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                {/* <p className="chekkid"></p> */}
              </li>
              <li>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid bor"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                {/* <p className="chekkid"></p> */}
              </li>
              <li>              
                <p className="chekkid "></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid bor"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid yuq"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                <p className="chekkid"></p>
                {/* <p className="chekkid"></p> */}
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
