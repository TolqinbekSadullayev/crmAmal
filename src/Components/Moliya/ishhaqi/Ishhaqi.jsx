import React from "react";
import "./Ishhaqi.css";

function Ishhaqi() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="col-12">
      <h4 className="mt-3">Ish haqi</h4>

      <div className="d-flex align-items-center col-12 bg-light my-3">
        <div className="purple__ishhaqi"></div>

        <p>
          Barcha o'qituvchilar uchun standart xarajatlarni belgilash
          parametrlarini ko'rsating
        </p>
      </div>
      <div className="ms-2">
        <p>Xarajat qiymati</p>
        <div className="d-flex flex-row">
          <div className="d-flex flex-row xarajat__qiymati">
            <input type="text" className="ishhaqi_input" />
            <button className="btn btn-secondary">Primary</button>
          </div>
          <div className="btn btn-primary mx-5">Saqlash</div>
        </div>
      </div>
      <div className="d-flex align-items-center col-12 bg-light my-3">
        <div className="purple__ishhaqi"></div>
        <div>
          <p>
            Barcha o'qituvchilar uchun standart xarajatlarni belgilash
            parametrlarini ko'rsating
          </p>
        </div>
      </div>
      <div className="ms-2">
        <p>Xarajat qiymati</p>
        <div className="d-flex flex-row">
          <div className="d-flex flex-row xarajat__qiymati">
            <input type="text" className="ishhaqi_input" />
            <button className="btn btn-secondary">Primary</button>
          </div>
          <div className="btn btn-primary mx-5">Saqlash</div>
        </div>
      </div>
      <div className="d-flex align-items-center col-12 bg-light my-3">
        <div className="purple__ishhaqi"></div>
        <div>
          <p>
            Barcha o'qituvchilar uchun standart xarajatlarni belgilash
            parametrlarini ko'rsating
          </p>
        </div>
      </div>
      <div  className="ms-2">
        <p>Xarajat qiymati</p>
        <div className="d-flex flex-row">
          <div className="d-flex flex-row xarajat__qiymati">
            <input type="text" className="ishhaqi_input" />
            <button className="btn btn-secondary">Primary</button>
          </div>
          <div className="btn btn-primary mx-5">Saqlash</div>
        </div>
      </div>
    </div>
  );
}

export default Ishhaqi;
