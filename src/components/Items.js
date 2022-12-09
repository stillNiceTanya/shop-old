import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <h2 key={el.id}>
            <Item
              item={el}
              onAdd={this.props.onAdd}
              onShowItem={this.props.onShowItem}
            ></Item>
          </h2>
        ))}
      </main>
    );
  }
}

export default Items;
