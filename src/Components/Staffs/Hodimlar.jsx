import React, { useEffect, useState } from "react";
import "../Group/Group.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineAutoDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";
import {AiFillLock, AiFillUnlock} from 'react-icons/ai'

export default function Guruxlar() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const [groupDataXodim, setGroupDataXodim] = useState([]);
  const [activ, setActiv] = useState(true);
  const [id_put, setId_put] = useState(0);

  const [ism, setIsm] = useState("");
  const [tel, setTel] = useState("");
  const [parol, setParol] = useState("");
  const [roli, setRoli] = useState("");
  const [sana, setSana] = useState("");
  const [rost, setRost] = useState(false);

  const [num, setNum] = useState(randomNumberInRange(1000, 1999));

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }




  useEffect(() => {
    axios
      .get("https://63ecd41d31ef61473b2a1146.mockapi.io/Roli")
      .then((ress) => {
        console.log(ress.data, "bu get data hodim");
        ress.data.map((item, index) => {
          item.icon = false;
        });
        setGroupDataXodim(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rost]);

  function Yuborish_btn() {
    axios
      .post("https://63ecd41d31ef61473b2a1146.mockapi.io/Roli", {
        Roli: roli,
        name: ism,
        Phone: tel,
        icon: false,
        Id: parseInt(num),
        status: ''
      })
      .then((ress) => {
        console.log(ress, "post");
        let post_data = [...groupDataXodim];
        post_data.push(ress.data);
        setGroupDataXodim(post_data);
        setIsm('')
        setTel('')
        setParol('')

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsm('')
        setTel('')
        setParol('')
      });
  }

  function Delete(id, index) {
    console.log(id, 'bi iddddddd');
    axios
      .delete(`https://63ecd41d31ef61473b2a1146.mockapi.io/Roli/${id}`)
      .then((ress) => {
        console.log(ress.data);
        let filter_data = groupDataXodim.filter((item, index) => {
          console.log(item.Id);
          return item.Id != id;
        });
        setGroupDataXodim(filter_data);
      })
      .catch((err) => {
        console.log(err);
      });
    let current = [...groupDataXodim];
    current[index].icon = false;
    setGroupDataXodim(current);
  }

  function Edit_off() {
    console.log(id_put);
    axios
      .put(`https://63ecd41d31ef61473b2a1146.mockapi.io/Roli/${id_put}`,
        {
          Roli: roli,
          name: ism,
          Phone: tel,
          icon: false,
          Id: num,
          status: ''
        }
      )

      .then((ress) => {
        console.log(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(true);
  }

  function Edit(id, index) {
    console.log(id, 'id', index, 'index');
    let current = [...groupDataXodim];
    current[index].icon = false;
    setId_put(id);
    setGroupDataXodim(current);
  }

  function activee() {
    setActiv(!activ);
  }

  function archive() {
    setActiv(!activ);
  }

  function button_icon(index) {
    let current = [...groupDataXodim];
    current[index].icon = true;
    setGroupDataXodim(current);
  }
  return (
    <div className="container border guruh_fon">
      <div className="row">
        <div className="col-6 guruhlar_title_name_left">
          <h2 className="guruhlar_name">Xodimlar</h2>
          <div className="active_group">
            <span className={activ ? "active" : ""} onClick={activee}>
              O'qituvchilar
            </span>
            <span className={!activ ? "archive" : ""} onClick={archive}>
              Boshqa xodimlar
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
      <table class="table guruhlar_table mb-4">
        <thead>
          <tr>
            <th scope="col" className="table_title">
              Id
            </th>
            <th scope="col" className="table_title">
              Name
            </th>
            <th scope="col" className="table_title">
              Phone
            </th>
            <th scope="col" className="table_title">
              Role
            </th>
            <th scope="col" className="table_title">
              Actions
            </th>
            {/* <th scope="col" className="table_title"></th> */}
          </tr>
        </thead>
        <tbody>
          {groupDataXodim ? (
            groupDataXodim.map((item, index) => {
              return (item.Roli == "O'qituvchi") ? (
                <tr
                  value={item}
                  className={activ ? "" : "d-none"}
                  style={{ position: "relative", alignItems: "center" }}
                >
                  <td className='item'>{item.Id}</td>
                  <td className="item width_name">
                      {item.name}
                  </td>
                  <td className="item">{item.Phone}</td>
                  <td className="item">{item.Roli}</td>
                  <td
                    className="item"
                    style={{ cursor: "pointer" }}
                    onClick={() => button_icon(index)}
                  >
                    <p className="icon">
                      <HiDotsVertical />
                    </p>
                  </td>
                  <div className={item.icon ? "list" : "d-none"}>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => Delete(item.Id, index)}
                      className="delete"
                    >
                      <span className="delet_icon">
                        <MdOutlineAutoDelete />
                      </span>
                      Delete
                    </p>
                    <p
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      style={{ cursor: "pointer" }}
                      onClick={() => Edit(item.Id, index)}
                      className="edit"
                    >
                      <span className="delet_icon">
                        <FiEdit />{" "}
                      </span>{" "}
                      Edit
                    </p>
                  </div>
                </tr>
              ) : (
                <tr
                  style={{ position: "relative" }}
                  className={activ ? "d-none" : ""}
                >
                  <td className="item">{item.Id}</td>
                  <td className="item">{item.name}</td>
                  <td className="item">{item.Phone}</td>
                  <td className="item">{item.Roli}</td>
                  <td
                    onClick={() => button_icon(index)}
                    className="item"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="icon">
                      <HiDotsVertical />
                    </p>
                    </td>
                  <div className={item.icon ? "list" : "d-none"}>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => Delete(item.Id, index)}
                      className="delete"
                    >
                      <span className="delet_icon">
                        <MdOutlineAutoDelete />
                      </span>{" "}
                      Delete
                    </p>
                    <p
                      style={{ cursor: "pointer" }}
                      className="edit"
                      onClick={() => Edit(item.Id, index)}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <span className="delet_icon">
                        <FiEdit />{" "}
                      </span>{" "}
                      Edit
                    </p>
                  </div>
                </tr>
              );
            })
          ) : (
            <>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </>
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
          <h5
            class="offcanvas-title offcanvas_title_guruh"
            id="offcanvasRightLabel"
          >
           Add New Staff
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form action="" style={{ textAlign: "left" }}>
            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Ism
              </label>
              <input
                type="text"
                className="input_guruh"
                placeholder="Ismni yozing"
                onInput={(val) => setIsm(val.target.value)}
              />
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Telefon
              </label>
              <input
                type='number'
                className="input_guruh"
                placeholder="Telefonini yozing"
                onInput={(val) => setTel(val.target.value)}
              />
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Parol
              </label>
              <input
                type='password'
                className="input_guruh"
                onInput={(val) => setParol(val.target.value)}
              />
            </div>


            <div className="form_div">
              <label htmlFor="" className="label_guruh">
             Roli
              </label>
              <select
                class="form-select select_guruh"
                onChange={(val) => setRoli(val.target.value)}
              >
                <option selected value="Xodim">Xodim </option>
                <option value="O'qituvchi">O'qituvchi</option>
              </select>
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
               Tug'ilgan sana
              </label>
              <input
                type='date'
                className="input_guruh"
               
                onInput={(val) => setSana(val.target.value)}
              />
            </div>
            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Photo
              </label>
              <input
                type="file"
                className="input_guruh"
                // onInput={(val) => setKurSana(val.target.value)}
              />
            </div>

            
            <button
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="yuborish_btn"
              type="button"
              onClick={Yuborish_btn}
            >
              Send
            </button>
            <button
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="yuborish_btn edit_off"
              type="button"
              onClick={Edit_off}
            >
              Edit group
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}