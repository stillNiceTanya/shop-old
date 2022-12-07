import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="order-item">
        <img
          className="order-item__img"
          src={this.props.item.img}
        />
        <h2 className="order-item__title">{this.props.item.title}</h2>
        <p className="order-item__price">${this.props.item.price}</p>
        <>
          <button
            className="button button__delete-item"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            Удалить
          </button>
        </>
      </div>
    );
  }
}

export default Order;
