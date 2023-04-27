import React, { useEffect, useState, createContext } from "react";
import "./Group.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


export default function Guruxlar() {
  const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };
  const Contextbar = createContext()
  const [groupData, setGroupData] = useState([]);
  const [activ, setActiv] = useState(true);
  const [kursNomi, setKursNomi] = useState('')
  const [kurs, setKurs] = useState('')
  const [oqituvchi, setOqituvchi] = useState('')
  const [kun, setKun] = useState('')
  const [xona, setXona] = useState('')
  const [boshlanishDarsVaqti, setDarsVaqt] = useState('')
  const [kursBoshSana, setKurSana] = useState('')
  const [gurug_index, setguruh] = useState('')
  const dispatch = useDispatch()


  useEffect(() => {
    axios
      .get("https://api.npoint.io/15ec254a9a4c2a0fcb6c")
      .then((ress) => {
        console.log(ress.data);
        setGroupData(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function activee() {
    setActiv(!activ);
  }

  function archive() {
    setActiv(!activ);
  }
  // adduser()
  // function adduser() {
  //   axios
  //   .post('https://644a7136a8370fb3214ec646.mockapi.io/nimadr/rooms',{
  //     'name': 'user12',
  //     'number': '339721212',
  //     'Status': 'true',
  //     'days': '23-yan'
  //   })
  //   .then(r=>{
  //     console.log(r , 'poas');
  //   })
  //   .catch(e=>{
  //     console.log(e);
  //   })

  // }

  function Yuborish_btn(){
    
    console.log('ishla');
    let current = [...groupData]
      current.push({
        days:kun,
        id:1233,
        name: kursNomi,
        status: true,
        teacher: oqituvchi,
        time:boshlanishDarsVaqti,
        kurs: kurs,
        xona: xona,
        kurs_boshlanish_sanasi: kursBoshSana,
      })
      console.log(current, 'bu currrent');
      dispatch({type: 'add', payload: current})
    setGroupData(current)
  }

  function Guruh(item) {
    console.log(item);
  }


  return (
    <div className="container border guruh_fon">
      <div className="row">
        <div className="col-6 guruhlar_title_name_left">
          <h2 className="guruhlar_name" >Guruhlar</h2>
          <div className="active_group">
            <span className={activ ? "active" : ""} onClick={activee}>
              Active
            </span>
            <span className={!activ ? "archive" : ""} onClick={archive}>
              Archive
            </span>
          </div>
        </div>
        <div className="col-6 btn_col">
          <button
            className="add_btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Yangisini qo'shish
          </button>
        </div>
      </div>
      <table class="table guruhlar_table">
        <thead>
          <tr>
            <th scope="col table_title">Id</th>
            <th scope="col table_title">Name</th>
            <th scope="col table_title">Teacher</th>
            <th scope="col table_title">Time</th>
            <th scope="col table_title">Days</th>
          </tr>
        </thead>
        <tbody>
          {groupData ? (
            groupData.map((item, index) => {
              return item.status ? (
              //  <Contextbar.Provider>
               
                 <tr value={item} className={activ ? "" : "d-none"} onClick={() =>  Guruh(item)}>
                  <td className="item">{item.id}</td>
                  <Link to={`/davomat/${item.name}`} state={item} style={linkStyle}>
                  <td className="item">{item.name}</td>
                  </Link>
                  <td className="item">{item.teacher}</td>
                  <td className="item">{item.time}</td>
                  <td className="item">{item.days}</td>

                </tr>
              
              //  </Contextbar.Provider>
              ) : (
                <tr className={activ ? "d-none" : ""}>
                  <td className="item">{item.id}</td>
                  <td className="item">{item.name}</td>
                  <td className="item">{item.teacher}</td>
                  <td className="item">{item.time}</td>
                  <td className="item">{item.days}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>

      {/* Offcanvas */}

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header offcanvas_header_border ">
          <h5 class="offcanvas-title offcanvas_title_guruh" id="offcanvasRightLabel">
            Yangi guruh qo'shish
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          
        <form action="" style={{textAlign:'left'}}>
          <div className="form_div">
            <label htmlFor="" className="label_guruh">Kurs nomi</label>
            <input type="text" className="input_guruh" placeholder='Front-End' onInput={(val) => setKursNomi(val.target.value)} />
          </div>

          <div className="form_div">
            <label htmlFor="" className="label_guruh">Kurs tanlash</label>
           <select   class="form-select select_guruh" onChange={(val) => setKurs(val.target.value)}>
            <option value="front-end">Front-End</option>
            <option value="back-end">Back-End</option>
            <option value="phyton">Phyton</option>
            <option value="web-beginner">Web site-beginner</option>
           </select>
          </div>

          <div className="form_div">
            <label htmlFor="" className="label_guruh">O'qituvchini tanlang</label>
           <select class="form-select select_guruh" onChange={(val) => setOqituvchi(val.target.value)} >
            <option value="Zufarbek Abdurahmonov">Zufarbek Abdurahmonov</option>
            <option value="Sheroz Turdiyev">Sheroz Turdiyev</option>
            <option value="Asadbek Shorahimov">Asadbek Shorahimov</option>
            <option value="Nurilloh Ubaydullayev">Nurilloh Ubaydullayev</option>
           </select>
          </div>

          <div className="form_div">
            <label htmlFor="" className="label_guruh">Kunlar</label>
           <select class="form-select select_guruh" onChange={(val) => setKun(val.target.value)} >
            <option value="juft-kunlar">Juft Kunlar</option>
            <option value="toq-kunlar">Toq kunlar</option>
           </select>
          </div>

          <div className="form_div">
            <label htmlFor="" className="label_guruh">Xonani tanlang</label>
           <select class="form-select select_guruh" onChange={(val) => setXona(val.target.value)} >
            <option value="1-xona">1-xona</option>
            <option value="2-xona">2-xona</option>
            <option value="3-xona">3-xona</option>
            <option value="4-xona">4-xona</option>
           </select>
          </div>

          <div className="form_div">
            <label htmlFor="" className="label_guruh">Darsning boshlanish vaqti</label>
            <select class="form-select select_guruh" onChange={(val) => setDarsVaqt(val.target.value)} >
            <option value="10:00">10:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:30">18:30</option>
           </select>
          </div>
          
          <div className="form_div">
            <label htmlFor="" className="label_guruh">Guruh boshqarish sanasi</label>
            <input type="text" placeholder="Sanani yozing" className="input_guruh" onInput={(val) => setKurSana(val.target.value)} />
          </div>
            <button className="yuborish_btn" type='button' onClick={Yuborish_btn}>Yuborish</button>
        </form>
          
          </div>
      </div>
    </div>
  );
}
