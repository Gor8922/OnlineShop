import React, { useContext } from "react";
import basket from "../imgs/basket.png";
import { Context } from "../context/Context";

export default function OneCard({ id, title, image, price, size, maindata }) {
  const { setBasket } = useContext(Context);
  const handleBasket = (e, id) => {
    e.stopPropagation();
    let bask = maindata.filter((item) => {
      return item.id === id;
    });
    setBasket((prev) => [...prev, ...bask]);
  };
  return (
    <div className="card" id={id}>
      <img src={image} alt="bearImage" />

      <div>{title}</div>
      <div>{size} սմ</div>
      <div className="price">{price} դր</div>
      <img
        src={basket}
        alt="addBasket"
        onClick={(e) => handleBasket(e, id)}
        className="cardBasket"
      />
    </div>
  );
}
