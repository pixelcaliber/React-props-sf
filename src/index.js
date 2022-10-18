import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div>
      <h2>{props.name} </h2>
      <img src={props.imgsrc} alt="avatar_img" />
      <p>{props.phone}</p>
      <p> {props.email} </p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Jack Bauer"
      imgsrc="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      email="jacknowhere.com"
    />
    <Card
      name="Chuck Norris"
      imgsrc="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      email="gmail@chucknorris.com"
    />
    {/* <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p> */}
  </div>,
  document.getElementById("root")
);
