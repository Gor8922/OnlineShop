import React, { useContext } from "react";
import deleteIcn from "../imgs/delete.png";
import { Context } from "../context/Context";

export default function ForBasket({ image, title, price, id }) {
  const { clearBasket } = useContext(Context);
  return (
    <div id={id} className="openBasket">
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{price} դր․</div>
      <img
        className="del"
        src={deleteIcn}
        alt="delete"
        onClick={(e) => clearBasket(e, id)}
      />
    </div>
  );
}
