import { Component } from 'react';
import Layout from './components/Layout.js';
import Navbar from './components/Navbar.js';
import Products from './components/Products.js';
import Title from './components/Title.js';

class App extends Component {
  state = {
      products: [
        { id: 'P1', name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
        { id: 'P2', name: 'Guisantes', price: 2500, img: '/productos/guisantes.jpg' },
        { id: 'P3', name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
      ],
      cart: [],
      cartVisibility: false,
  }

  addToCart = (product) => {

    const { cart } = this.state;

    if (cart.find(x => x.id === product.id)) {
        const newCart = cart.map(x => x.id === product.id
          ? ({
            ...x,
            quantity: x.quantity + 1
          })
          : x);

        return this.setState({ cart: newCart});
    }

    return this.setState({
        cart: this.state.cart.concat({
          ...product,
          quantity: 1,
        })
    })
  }

  showCart = () => {

    if (!this.state.cart.length) {
      return;
    }

    this.setState({ cartVisibility: !this.state.cartVisibility });
  }

  render() {

    return (
      <div>
        <Navbar
          cart={this.state.cart}
          cartVisibility={this.state.cartVisibility}
          showCart={this.showCart}
          />
        <Layout>
          <Title />
          <Products
              addToCart={this.addToCart}
              products={this.state.products}
            />
        </Layout>
      </div>
    );
  };
}

export default App;
