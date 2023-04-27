import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";
import "./Xarajat.css";
import payments from "./payments.png";
import axios from "axios";

export default function Xarajat() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/e122b89883b8f2321d9e")
      .then((arr) => {
        console.log(arr.data);
        setData(arr.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-12">
      <h1>Xarajatlar</h1>
      <div className="row my-3">
        <div className="col-4">
          <h4>Sanadan boshlab*</h4>
          <OutlinedInput className="rounded-3" />
        </div>
        <div className="col-4">
          <h4>Sana bo'yicha*</h4>
          <OutlinedInput className="rounded-3" />
        </div>
        <div className="col-3 mt-5">
          <Button variant="contained" color="secondary" size="large">
            Filter
          </Button>
        </div>
      </div>
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
                <h6>{arr.sana.kun}.{(arr.sana.oy<10)?("0" + arr.sana.oy):(arr.sana.oy)}.{arr.sana.yil}</h6>
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
