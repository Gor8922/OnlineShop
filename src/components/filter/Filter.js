import React, { useContext } from "react";
import { Context } from "../context/Context";

export default function Filter() {
  return (
    <>
      <div className="forFilterHeight">
        <p>Չափ</p>
        <input type="text" placeholder="min" />
        <input type="text" placeholder="max" />
        <p>Գին</p>
        <input type="text" placeholder="min" />
        <input type="text" placeholder="max" />
      </div>
    </>
  );
}
