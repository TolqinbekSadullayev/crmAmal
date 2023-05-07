import React, { useState } from "react";
import "./Account.css";
import logo_img from "../img/logo_img.png";

export default function Account() {
  const [oldLogin, setOldLogin] = useState("");
  const [newLogin, setNewLogin] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const responses = await fetch(
        "https://64515f17a322196911620a6f.mockapi.io/login/users/Login"
      );
      const users = await responses.json();
      const user = users.find((u) => u.username === oldLogin && u.password === password);
      const id = user.id;
  
      if (user) {
        const response = await fetch(
          `https://64515f17a322196911620a6f.mockapi.io/login/users/Login/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: newLogin, password, avatar }),
          }
        );
  
        if (response.ok) {
          alert("O'zgartirish muvaffaqiyatli amalga oshirildi!");
        } else {
          alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
        }
      } else {
        alert("Login yoki parol noto'g'ri!");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };
  return (
    <div className="avabody">
      <div className="containerr">
        <img src={avatar || logo_img} alt="Avatar" className="avatar" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={oldLogin}
            onChange={(e) => setOldLogin(e.target.value)}
            placeholder="Avvalgi login"
            required
          />
          <input
            type="text"
            value={newLogin}
            onChange={(e) => setNewLogin(e.target.value)}
            placeholder="Yangi login"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parol o'zgartirish"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            placeholder="Avatar tanlash"
          />
          <button className="update-button" type="submit">
            O'zgartirish
          </button>
        </form>
      </div>
      <button
        className="back-button"
        onClick={() => (window.location.href = "/home")}
      >
        Bosh sahifaga qaytish
      </button>
    </div>
  );
}
