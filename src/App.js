import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Category from "./components/Category";
import ShowPopUpItem from "./components/ShowPopUpItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentCategory: [],
      items: [
        {
          id: 1,
          title: "Торты",
          description: "description description description",
          img: "./img/cake.jpeg",
          category: "Торты",
          price: "35",
        },
        {
          id: 2,
          title: "Капкейки",
          description: "description description description",
          img: "./img/capecakess.jpeg",
          category: "Капкейки",
          price: "12",
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
          category: "Шоколад",
          price: "10",
        },
        {
          id: 5,
          title: "Печенье",
          description: "description description description",
          img: "./img/cookies.jpeg",
          category: "Печенье",
          price: "8",
        },
      ],
      showItem: false,
      popUpItem: {},
    };
    this.state.currentCategory = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteFromOrder = this.deleteFromOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          onDelete={this.deleteFromOrder}
          orders={this.state.orders}
        ></Header>
        <Category
          items={this.state.items}
          onChoose={this.chooseCategory}
        ></Category>
        <Items
          items={this.state.currentCategory}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        ></Items>

        {this.state.showItem && (
          <ShowPopUpItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.popUpItem}
          ></ShowPopUpItem>
        )}
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

  chooseCategory(id) {
    if (id === "all") {
      this.setState({
        currentCategory: this.state.items,
      });
    } else {
      this.setState({
        currentCategory: this.state.items.filter((el) => el.id === id),
      });
    }
  }

  onShowItem(item) {
    this.setState({ popUpItem: item });
    this.setState({ showItem: !this.state.showItem });
  }
}

export default App;
