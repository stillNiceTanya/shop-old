import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="hero-page__item">
        <div className="img-wrapper">
          <img
            className="item-img"
            src={this.props.item.img}
          />
        </div>
        <div className="card-info">
          <h2 className="item-title">{this.props.item.title}</h2>
          <p className="item-description">{this.props.item.description}</p>
          <div className="price-add-card">
            <p className="item-price">{this.props.item.price}</p>
            <button
              className="button__add-to-cart"
              onClick={() => this.props.onAdd(this.props.item)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
