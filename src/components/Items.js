import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <h2>
            <Item
              item={el}
              key={el.id}
              onAdd={this.props.onAdd}
            ></Item>
          </h2>
        ))}
      </main>
    );
  }
}

export default Items;
