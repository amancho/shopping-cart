import { Component } from 'react';

const styles = {
    cartProducts: {
      backgroundColor: '#fff',
      position: 'absolute',
      marginTop: 30,
      boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
      borderRadius: '5px',
      width: '300px',
      right: 50,
    },
    listProducts:{
      margin:0,
      padding:0
    },
    product: {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px',
      borderBottom: 'solid 1px #aaa',
    }
};

class CartProducts extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div style={styles.cartProducts}>
        <ul style={styles.listProducts}>
          { cart.map(product =>
            <li style={styles.product} key={product.id}>
              <img alt={product.name} src={product.img} width='50' height='32' />
              {product.name} <span>{product.quantity}</span>
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default CartProducts;
