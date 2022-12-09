import React from "react";

export default function ShowPopUpItem(props) {
  return (
    <div
      onClick={() => props.onShowItem()}
      className="popup-wrapper"
    >
      <div className="popup">
        <img
          className="item-img"
          src={props.item.img}
        />

        <h2 className="item-title">{props.item.title}</h2>
        <p className="item-description">{props.item.description}</p>
        <div className="price-add-card">
          <p className="item-price">${props.item.price}</p>
          <button
            className="button button__add-to-cart"
            onClick={() => props.onAdd(props.item)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
