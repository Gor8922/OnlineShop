import React from "react";
import inst from "../imgs/inst.jpg";
import face from "../imgs/face.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/arjuknererevan/" target="_blank">
        <img src={inst} alt="inst" />
        Arjukner
      </a>
      <a href="https://www.instagram.com/nverland.am/" target="_blank">
        <img src={inst} alt="inst" />
        NverLand
      </a>
      <a href="https://www.facebook.com/syuz.egyan">
        <img src={face} alt="face" />
        FaceBook
      </a>
    </div>
  );
}
