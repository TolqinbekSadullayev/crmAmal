import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Talabalar.css'
export default function Talabalar() {
  const [mas, setMass] = useState([])
  const [mas1, setMass1] = useState([])
  const [inp1, Input1] = useState("")
  const [inp2, Input2] = useState("")
  const [inp3, Input3] = useState("")
  const [inp4, Input4] = useState("")
  const [inp5, Input5] = useState("")
  const [index, setIndex] = useState(Number)

  useEffect(() => {
    getVal()
  }, []);

  function getVal() {
    axios("https://63ecd41d31ef61473b2a1146.mockapi.io/contentsources")
      .then((ress) => {
        setMass(ress.data)
        setMass1(ress.data)
      })
  }

  function bos2(index) {
    setIndex(index)
  }

  function bloklash() {
    mas1[index].status = "bg-danger text-white"
    setMass1([...mas1])
    bos2()
  }

  function blokdan_chiqarish() {
    mas1[index].status = "bg-light"
    setMass1([...mas1])
    bos2()
  }

  function sessiyani_tugatish() {
    mas1.splice(index, 1)
    setMass1([...mas1])
    bos2()
  }

  function Tahrirlash(index) {
    Input1(mas1[index].Id)
    Input2(mas1[index].Fio)
    Input3(mas1[index].Phone)
    Input4(mas1[index].Groups)
    Input5(mas1[index].Role)
  }

  function but() {
    let car = {
      "Id": inp1,
      "Fio": inp2,
      "Phone": inp3,
      "Groups": inp4,
      "Role": inp5,
    }

    mas1.push(car)
    setMass1([...mas1])
    setIndex()
    Input1('')
    Input2('')
    Input3('')
    Input4('')
    Input5('')
  }

  const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

  return (
    <div className="container">
      <div className="row far">
        <div className='d-flex justify-content-between'>
          <h2>Talabalar</h2>
          <button type="button" className="btn btn-primary class" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Yangisini qo'shish
          </button>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input onInput={(val) => Input1(val.target.value)} value={inp1} className='form-control' placeholder='Id' type="text" />
              <br />
              <input onInput={(val) => Input2(val.target.value)} value={inp2} className='form-control' placeholder='Fio' type="text" />
              <br />
              <input onInput={(val) => Input3(val.target.value)} value={inp3} className='form-control' placeholder='Phone' type="text" />
              <br />
              <input onInput={(val) => Input4(val.target.value)} value={inp4} className='form-control' placeholder='Groups' type="text" />
              <br />
              <input onInput={(val) => Input5(val.target.value)} value={inp5} className='form-control' placeholder='Role' type="text" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => but()}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Fio</th>
            <th scope="col">Phone</th>
            <th scope="col">Groups</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {mas1.map((item, index) => {
            return (
              <tbody>
                <tr className={`my-5 ${item.status}`} key={index}>
                  <td>{item.Id}</td>
                  <td>{item.Fio}</td>
                  <td>{item.Phone}</td>
                  <td>{item.Groups}</td>
                  <td>{item.Role}</td>
                  <button type="button" onClick={() => bos2(index)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">:</button>
                </tr>
              </tbody>
            )
          })
        }
      </table>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column justify-content-center">
              <button className='btn btn-danger mx-4 my-1' onClick={() => bloklash()} data-bs-dismiss="modal">Bloklash</button>
              <button className='btn btn-primary mx-4 my-1' onClick={() => blokdan_chiqarish()} data-bs-dismiss="modal">Blokdan chiqarish</button>
              <button className='btn btn-info text-light mx-4 my-1' onClick={() => sessiyani_tugatish()} data-bs-dismiss="modal">Sessiyani tugatish</button>
              <button className="btn btn-success mx-4 my-1" onClick={() => Tahrirlash(index)} aria-controls="offcanvasRight" data-bs-toggle="modal" data-bs-target="#exampleModal1">Tahrirlash</button>
            </div>
            <div className="modal-footer">
              
            </div>
          </div>
        </div>
      </div>

    </div>

  )
};