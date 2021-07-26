import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCart } from '../Redux/Actions';

import imgCart from '../images/cart.png';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // addCart = (product) => {
  //   const { cart } = this.state;
  //   const productCart = addCartRefact(product, cart);
  //   this.setState({
  //     cart: productCart,
  //   });
  //   localStorage.setItem('LScart', JSON.stringify(productCart));
  // }

  render() {
    const { location: { state: { product } } } = this.props;
    const {
      id, title, thumbnail, price, attributes,
    } = product;
    const { addToCart, cart } = this.props;
    return (
      <div className="ProductDetails">
        <div className="details">
          <h4>DETALHES DO PRODUTO</h4>
          <br />
          <p className="title">{title}</p>
          <img src={thumbnail} alt={title} />
          <p className="price">{`R$ ${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
          <br />
        </div>
        <div className="moreInformations">
          <h4>MAIS INFORMAÇÕES:</h4>
          <br />
          {attributes.map((attribute) => (
            <div key={attribute.name}>
              <p className="uppercase">{`${attribute.name}: ${attribute.value_name}` }</p>
            </div>
          ))}
        </div>
        <div className="areaButtonsDetails">
          <button
            type="button"
            className="buttonCart"
            onClick={() => addToCart(product, id)}
          >
            Adicionar
          </button>
          <button
            type="button"
            className="buttonHome"
          >
            <Link to="/">
              Home
            </Link>
          </button>
          <div className="qtdAndCart">
            <button
              className="cartSearch"
              type="button"
            >
              <Link
                to="/cart"
              >
                <img src={imgCart} alt="carrinho de compras" className="imgCart" />
              </Link>
            </button>
            <p className={(cart.length === 0) ? 'qtdCart' : ''}>{cart.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, id) => dispatch(
    addCart(product, id),
  ),
});

const mapStateToProps = ({ CartReducer: { cart } }) => ({
  cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
