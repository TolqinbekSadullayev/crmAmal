import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";
import "./Xarajat.css";
import payments from "../images/payments.png";
import axios from "axios";

export default function Xarajat() {
  const [data, setData] = useState([]);
  let currentData = [...data];
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");

  useEffect(() => {
    axios
      .get("https://api.npoint.io/e122b89883b8f2321d9e")
      .then((arr) => {
        setData(arr.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function SearchDate() {
    let kun = parseInt(inp1.substring(0, inp1.indexOf(".")));
    let oy = parseInt(
      inp1.substring(inp1.indexOf(".") + 1, inp1.lastIndexOf("."))
    );
    let yil = parseInt(inp1.substring(inp1.lastIndexOf(".") + 1));
    if (kun >= 1 && kun <= 31 && oy >= 1 && oy <= 12 && yil / 1000 >= 1) {
      let current2 = [];
      currentData.map((arr, index) => {
        if (yil <= arr.sana.yil) {
          if (oy <= arr.sana.oy) {
            if (kun <= arr.sana.kun) {
              console.log("to'g'ri ishladi!");
              current2.push(arr);
              setData(current2);
            }
          }
        }
      });
    } else {
      console.log("Noto'g'ri sana formati");
    }
  }

  return (
    <div className="col-12">
      <h1>Xarajatlar</h1>
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
        <div className="col-2">
          <h2>Nomi</h2>
        </div>
        <div className="col-2">
          <h2>Sana</h2>
        </div>
        <div className="col-2">
          <h2>Turkum</h2>
        </div>
        <div className="col-2">
          <h2>Oluvchi</h2>
        </div>
        <div className="col-2">
          <h2>So'm</h2>
        </div>
      </div>

      {data.length > 0 &&
        data.map((arr, index) => {
          return (
            <div className="row bg-light my-3 border rounded-4" key={index}>
              <div className="col-2">
                <h6>{arr.nomi}</h6>
              </div>
              <div className="col-2">
                <h6>
                  {arr.sana.kun < 10 ? "0" + arr.sana.kun : arr.sana.kun}.
                  {arr.sana.oy < 10 ? "0" + arr.sana.oy : arr.sana.oy}.
                  {arr.sana.yil}
                </h6>
              </div>
              <div className="col-2">
                <h6>{arr.turkum}</h6>
              </div>
              <div className="col-2">
                <h6>{arr.oluvchi}</h6>
              </div>
              <div className="col-2">
                <h6>{arr.summa}</h6>
              </div>
            </div>
          );
        })}
    </div>
  );
}
