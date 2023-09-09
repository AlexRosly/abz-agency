// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import ellipse from "../../assets/images/ellipse.jpg";

import { useState } from "react";
// import { PositionList } from "../PositionList/PositionList";
import "./PostRequest.scss";

export const PostRequest = ({ id, position }) => {
  // console.log("POST - REQ", position);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [positions, setPositions] = useState("");

  const setForm = (e) => {
    console.log({ e });
    const { name, value } = e.currentTarget;

    console.log(name, email, number, positions, value);
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "position") {
      setPositions(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("e", e.target.value);
  };

  return (
    <div id={id} className="postRequest__section">
      <h2 className="postRequest__title">Working with POST request</h2>
      <form className="postRequest__form" onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Your name"
          className="postRequest__input postRequest__input--modificator"
          onChange={setForm}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          className="postRequest__input postRequest__input--modificator"
          onChange={setForm}
          required
        />
        <input
          type="phone"
          name="number"
          value={number}
          placeholder="Phone"
          className="postRequest__input"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={setForm}
          required
        />
        <span className="postRequest__example">+38 (XXX) XXX - XX - XX</span>
        <div className="postRequest__radioBlock">
          <p className="postRequest__paragraf">Select your position</p>
          {position &&
            position.map(({ id, name }) => (
              <label className="postRequest__radioLabel" key={id}>
                <input
                  type="radio"
                  name="position"
                  value={name}
                  className="postRequest__radioInput"
                  onChange={setForm}
                />
                {name}
              </label>
            ))}
        </div>
        <div className="postRequest__file">
          <label className="postRequest__label">
            Upload
            <input type="file" className="postRequest__upload"></input>
          </label>
          <span className="postRequest__upload--text">Upload your photo</span>
        </div>
        <button type="submit" className="postRequest__btn">
          Sign up
        </button>
      </form>
    </div>
  );
};
