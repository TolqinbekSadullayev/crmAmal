import React, { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'
import './xonalarCss.css'
import { HiDotsVertical } from 'react-icons/hi'
import { FiEdit } from 'react-icons/fi'
import MenuItem from '@mui/material/MenuItem';
import {AiFillDelete} from 'react-icons/ai'


export default function Xonalar() {
  const [mass, setMass] = useState([])
  const [input, setinput] = useState()
  const [input1, setinput1] = useState()
  const [input2, setinput2] = useState()
  const [current, setCurrent] = useState([])


  useEffect(() => {
    axios.get("https://644cf05357f12a1d3dd3f8c0.mockapi.io/objeck/objeck")
      .then(ress => {
        ress.data.map((item, index) => {
          item.icon = false
        })
        setMass(ress.data)
      })
      .catch(err => {
        console.log(err);
      })

  }, [])


  function sent() {
    axios.post(`https://644cf05357f12a1d3dd3f8c0.mockapi.io/objeck/objeck`,
      {
        name: input,
        stol: input1,
        xona_sigimi: input2
      })
      .then(ress => {
        let current = [...mass]
        current.push(ress.data)
        setMass(current)
        console.log(ress, ' bu ress');
      })
      .catch(err => {
        console.log(err, 'bu err');
      })
  }



  function Delete(id, index) {
    axios
      .delete(`https://644cf05357f12a1d3dd3f8c0.mockapi.io/objeck/objeck/${id}`)
      .then(ress => {
        let filter_data = mass.filter((item, index) => {
          return (item.id != id)
        })
        setMass(filter_data)
      })
      .catch(err => {
        console.log(err);
      })
    let current = [...mass];
    current[index].icon = false;
    setMass(current);
    console.log(index, 'ishladi del button');
    console.log(current[index].icon, 'bu status');
  }

  return (
    <div>
      <div className="row d-flex my-5">
        <div className="col-3">
          <h1 className='xona'>Xonalar</h1>
        </div>
        <div className="col-3">
          <button class=" btnnn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Yangisini Qo'shish</button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Add New Staff</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <hr />
              <div className="onee my-4 d-flex">
                <label className='my-2' htmlFor="">Xona Nomi*</label>
                <input onInput={(item) => setinput(item.target.value)} className='form-control' type="text" placeholder="Xona Nomi" />
              </div>
              <div className="twoo my-4">
                <label className='my-2' htmlFor="">Xona Sigimi </label>
                <input onInput={(item) => setinput1(item.target.value)} className='form-control' type="text" placeholder="Xona Sig'imi " />
              </div>
              <div className="sri">
                <label className='my-2' htmlFor="">Parta va Stullar Soni</label>
                <input onInput={(item) => setinput2(item.target.value)} className='form-control' type="text" placeholder="Parta va Stullar soni" />
              </div>
              <button onClick={() => sent()} className=' text-light btnn  my-4' data-bs-dismiss="offcanvas" aria-label="Close">Yuborish</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className='table'>
          <tr style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "850px", marginLeft: "50px" }}>
            <th>Xonani nomi</th>
            <th className='sigim'>xona sig'imi</th>
            <th>parta stul soni</th>
            <th>

            </th>
          </tr>
          {
            (mass.length > 0) ? mass.map((item, index) => {
              return (
                <div key={index} >
                  <tbody >
                    <tr style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "900px", marginLeft: "50px" }}>
                      <td>{item.name}</td>
                      <td className='stol'>{item.xona_sigimi}</td>
                      <td>{item.stol}</td>
                      <td>
                        <MenuItem onClick={() => Delete(item.id, index)}><AiFillDelete className='iconn' /></MenuItem>
                      </td>
                    </tr>
                  </tbody>
                </div>

              )
            })
              :
              <div>
                <h1>...Loading</h1>
              </div>
          }

        </table>
      </div>

    </div>
  )
}