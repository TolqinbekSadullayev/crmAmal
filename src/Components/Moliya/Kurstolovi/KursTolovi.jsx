import React, { useEffect, useState } from "react";
import payments from "../images/payments.png";
import "./KursTolovi.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";
import axios from "axios";

function KursTolovi() {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/13d81aa26d27632b5913")
      .then((arr) => {
        console.log(arr.data, "bu arr");
        setData(arr.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function SearchDate() {}

  return (
    <div>
      <div className="col-9">
        <h1>Kurs to'lovlari</h1>

        <div className="d-flex align-items-center col-12 bg-light my-3">
          <div className="purple__div"></div>
          <div>
            <h2>Davr uchun xarajatlar 6 7000 265 so'm</h2>
          </div>
          <img
            src={payments}
            alt="rasm"
            style={{ width: "60px", marginLeft: "10px" }}
          />
        </div>

        <div className="row my-3">
          <div className="col-4">
            <h4>Sanadan boshlab*</h4>
            <OutlinedInput
              className="rounded-3"
              onInput={(item) => {
                setInp1(item.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <h4>Sana bo'yicha*</h4>
            <OutlinedInput
              className="rounded-3"
              onInput={(item) => {
                setInp2(item.target.value);
              }}
            />
          </div>
          <div className="col-3 mt-5">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={SearchDate}
            >
              Filter
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h2>Kurslar</h2>
          </div>
          <div className="col-6">
            <h2>Sana</h2>
          </div>
        </div>

        {data.length > 0 &&
          data.map((res, index) => {
            return (
              <div className="row">
                <div className="col-6">
                  <p>{res.kurs}</p>
                </div>
                <div className="col-6">
                  <p>
                    {res.sana.kun < 10 ? "0" + res.sana.kun : res.sana.kun}.
                    {res.sana.oy < 10 ? "0" + res.sana.oy : res.sana.oy}.
                    {res.sana.yil}  {" "}
                    {res.vaqt.soat}:{res.vaqt.minut}:{res.vaqt.sekund}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default KursTolovi;
