import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Торты",
          description: "description description description",
          img: "./img/cake.jpeg",
          category: "cakes",
          price: "$35",
        },
        {
          id: 2,
          title: "Капкейки",
          description: "description description description",
          img: "./img/capecakess.jpeg",
          category: "cupcake",
          price: "$12",
        },
        // {
        //   id: 3,
        //   title: "Наборы сладостей",
        //   description: "description description description",
        //   img: "./img/capecakess.jpeg",
        //   category: "pastry",
        //   price: "$29",
        // },
        {
          id: 4,
          title: "Шоколад",
          description: "description description description",
          img: "./img/choco.jpeg",
          category: "pastry",
          price: "$10",
        },
        {
          id: 5,
          title: "Кэнди бар",
          description: "description description description",
          img: "./img/cookies.jpeg",
          category: "pastry",
          price: "$8",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteFromOrder = this.deleteFromOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          onDelete={this.deleteFromOrder}
          orders={this.state.orders}
        ></Header>
        <Items
          items={this.state.items}
          onAdd={this.addToOrder}
        ></Items>
        <Footer></Footer>
      </div>
    );
  }
  addToOrder(item) {
    let isInOrder = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInOrder = true;
      }
    });
    if (!isInOrder)
      this.setState({
        orders: [...this.state.orders, item],
      });
  }

  deleteFromOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
}

export default App;
