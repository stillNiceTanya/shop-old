import React from "react";

export default function Category(props) {
  return (
    <div>
      <div
        className="category-filter"
        onClick={() => props.onChoose("all")}
      >
        Все товары
      </div>
      {props.items.map((el) => (
        <div
          onClick={() => props.onChoose(el.id)}
          key={el.id}
          className="category-filter"
        >
          {el.category}
        </div>
      ))}
    </div>
  );
}
