import React, { useEffect, useState } from "react";
import "./Group.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineAutoDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";

export default function Guruxlar() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const [groupData, setGroupData] = useState([]);
  const [activ, setActiv] = useState(true);
  const [id_put, setId_put] = useState(0);

  const [kursNomi, setKursNomi] = useState("");
  const [kurs, setKurs] = useState("Front-End");
  const [oqituvchi, setOqituvchi] = useState("Zufarbek Abdurahmonov");
  const [kun, setKun] = useState("Juft kunlar");
  const [xona, setXona] = useState("1-xona");
  const [boshlanishDarsVaqti, setDarsVaqt] = useState("10:00");
  const [kursBoshSana, setKurSana] = useState("");
  const [kursTugashSana, setTugashSana] = useState("");
  const [rost, setRost] = useState(false);

  useEffect(() => {
    axios
      .get("https://644a7136a8370fb3214ec646.mockapi.io/nimadr/group")
      .then((ress) => {
        console.log(ress.data, "bu get data ");
        ress.data.map((item, index) => {
          item.icon = false;
        });
        setGroupData(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rost]);

  function Yuborish_btn() {
    axios
      .post("https://644a7136a8370fb3214ec646.mockapi.io/nimadr/group", {
        name: kursNomi,
        teacher: oqituvchi,
        time: boshlanishDarsVaqti,
        days: kun,
        kurs: kurs,
        bosh_sana: kursBoshSana,
        tugash_sana: kursTugashSana,
        status: true,
        count: true,
        xona: xona,
        icon: false,
      })
      .then((ress) => {
        console.log(ress, "post");
        let post_data = [...groupData];
        post_data.push(ress.data);
        setGroupData(post_data);

        setKurSana("");
        setTugashSana("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setKursNomi("");
      });
  }

  function Delete(id, index) {
    axios
      .delete(`https://644a7136a8370fb3214ec646.mockapi.io/nimadr/group/${id}`)
      .then((ress) => {
        console.log(ress.data);
        let filter_data = groupData.filter((item, index) => {
          return item.id != id;
        });
        setGroupData(filter_data);
      })
      .catch((err) => {
        console.log(err);
      });
    let current = [...groupData];
    current[index].icon = false;
    setGroupData(current);
  }

  function Edit_off() {
    axios
      .put(
        `https://644a7136a8370fb3214ec646.mockapi.io/nimadr/group/${id_put}`,
        {
          name: kursNomi,
          teacher: oqituvchi,
          time: boshlanishDarsVaqti,
          days: kun,
          kurs: kurs,
          bosh_sana: kursBoshSana,
          tugash_sana: kursTugashSana,
          count: true,
          xona: xona,
          icon: false,
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
    let current = [...groupData];
    current[index].icon = false;
    setId_put(id);
    setGroupData(groupData);
  }

  function activee() {
    setActiv(!activ);
  }

  function archive() {
    setActiv(!activ);
  }

  function button_icon(index) {
    let current = [...groupData];
    current[index].icon = true;
    setGroupData(current);
  }

  return (
    <div className="container border guruh_fon">
      <div className="row">
        <div className="col-6 guruhlar_title_name_left">
          <h2 className="guruhlar_name">Guruhlar</h2>
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
            <th scope="col" className="table_title">
              Id
            </th>
            <th scope="col" className="table_title">
              Name
            </th>
            <th scope="col" className="table_title">
              Teacher
            </th>
            <th scope="col" className="table_title">
              Time
            </th>
            <th scope="col" className="table_title">
              Days
            </th>
            <th scope="col" className="table_title"></th>
          </tr>
        </thead>
        <tbody>
          {groupData ? (
            groupData.map((item, index) => {
              return item.status ? (
                <tr
                  value={item}
                  className={activ ? "" : "d-none"}
                  style={{ position: "relative", alignItems: "center" }}
                >
                  <td className="item">{item.id}</td>
                  <td className="item width_name">
                    <Link
                      to={`/davomat/${item.id}`}
                      state={item}
                      style={linkStyle}
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="item">{item.teacher}</td>
                  <td className="item">{item.time}</td>
                  <td className="item">{item.days}</td>
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
                      onClick={() => Delete(item.id, index)}
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
                      onClick={() => Edit(item.id, index)}
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
                  <td className="item">{item.id}</td>
                  <td className="item">{item.name}</td>
                  <td className="item">{item.teacher}</td>
                  <td className="item">{item.time}</td>
                  <td className="item">{item.days}</td>
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
                      onClick={() => Delete(item.id, index)}
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
                      onClick={() => Edit(item.id, index)}
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
          <form action="" style={{ textAlign: "left" }}>
            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Guruh nomini yozing
              </label>
              <input
                type="text"
                className="input_guruh"
                placeholder="Guruh nomini yozing"
                onInput={(val) => setKursNomi(val.target.value)}
              />
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Kurs tanlash
              </label>
              <select
                defaultValue={"front-end"}
                class="form-select select_guruh"
                onChange={(val) => setKurs(val.target.value)}
              >
                <option selected value="front-end">
                  Front-End
                </option>
                <option value="back-end">Back-End</option>
                <option value="phyton">Phyton</option>
                <option value="web-beginner">Web site-beginner</option>
              </select>
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                O'qituvchini tanlang
              </label>
              <select
                defaultValue={"Zufarbek Abdurahmonov"}
                class="form-select select_guruh"
                onChange={(val) => setOqituvchi(val.target.value)}
              >
                <option selected value="Zufarbek Abdurahmonov">
                  Zufarbek Abdurahmonov
                </option>
                <option value="Sheroz Turdiyev">Sheroz Turdiyev</option>
                <option value="Asadbek Shorahimov">Asadbek Shorahimov</option>
                <option value="Nurilloh Ubaydullayev">
                  Nurilloh Ubaydullayev
                </option>
              </select>
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Kunlar
              </label>
              <select
                class="form-select select_guruh"
                onChange={(val) => setKun(val.target.value)}
              >
                <option selected value="juft kunlar">
                  Juft Kunlar
                </option>
                <option value="toq kunlar">Toq kunlar</option>
              </select>
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Xonani tanlang
              </label>
              <select
                class="form-select select_guruh"
                onChange={(val) => setXona(val.target.value)}
              >
                <option selected value="1-xona">
                  1-xona
                </option>
                <option value="2-xona">2-xona</option>
                <option value="3-xona">3-xona</option>
                <option value="4-xona">4-xona</option>
              </select>
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Darsning boshlanish vaqti
              </label>
              <select
                class="form-select select_guruh"
                onChange={(val) => setDarsVaqt(val.target.value)}
              >
                <option selected value="10:00">
                  10:00
                </option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:30">18:30</option>
              </select>
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Guruh boshlanish sanasi
              </label>
              <input
                defaultValue={kursBoshSana}
                type="text"
                placeholder="Sanani yozing"
                className="input_guruh"
                onInput={(val) => setKurSana(val.target.value)}
              />
            </div>

            <div className="form_div">
              <label htmlFor="" className="label_guruh">
                Guruh tugash sanasi
              </label>
              <input
                defaultValue={kursTugashSana}
                type="text"
                placeholder="Sanani yozing"
                className="input_guruh"
                onInput={(val) => setTugashSana(val.target.value)}
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
