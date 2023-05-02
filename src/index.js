import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Guruxlar from "./Components/Group/Guruxlar";
import Hodimlar from "./Components/Staffs/Hodimlar";
import Talabalar from "./Components/Talabalar/Talabalar";
import Xonalar from "./Components/Xonalar/Xonalar";
import Davomat from "./Components/Davomat/Davomat";
import Xarajat from "./Components/Moliya/Xarajat/Xarajat";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import './i18n'
import Homee from "./Home";
import Account from "./Components/Home/Account";
// import { store } from "./Components/Store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Register />} />
            <Route path="/account" element={<Account/>}/>
            <Route path="/" element={<Homee />}>
              <Route index path="/home" element={<Home />} />
              <Route path="/guruxlar" element={<Guruxlar />} />
              <Route path="/xarajat" element={<Xarajat />} />
              <Route path="/hodimlar" element={<Hodimlar />} />
              <Route path="/talabalar" element={<Talabalar />} />
              <Route path="/xonalar" element={<Xonalar />} />
              <Route path="/davomat/:id" element={<Davomat />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
