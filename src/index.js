import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Guruxlar from './Components/Group/Guruxlar';
import Moliya from './Components/Moliya/Moliya';
import Hodimlar from './Components/Staffs/Hodimlar';
import Talabalar from './Components/Talabalar/Talabalar'
import Xonalar from './Components/Xonalar/Xonalar'
import Davomat from './Components/Davomat/Davomat'
import { Provider } from 'react-redux';
import { store } from './Components/Store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/guruxlar" element={<Guruxlar/>}/>
            <Route path="/moliya" element={<Moliya/>}/>
            <Route path="/hodimlar" element={<Hodimlar/>}/>
            <Route path="/talabalar" element={<Talabalar/>}/>
            <Route path="/xonalar" element={<Xonalar/>}/>
            <Route path='/davomat/:teacher' element={<Davomat/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </Provider>
  </React.StrictMode>
);


