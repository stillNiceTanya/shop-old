import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img
          className="order-item-img"
          src={this.props.item.img}
        />

        <h2 className="order-title">{this.props.item.title}</h2>
        <p className="order-price">{this.props.item.price}</p>
      </div>
    );
  }
}

export default Order;
