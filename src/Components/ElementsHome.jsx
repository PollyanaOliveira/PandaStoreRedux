import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../Redux/Actions';

import lupa from '../images/lupa.png';
import imgCart from '../images/cart.png';

class ElementsHome extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      query: value,
    });
  }

  render() {
    const { cart, getProducts } = this.props;
    const { query } = this.state;

    return (
      <div className="elementsHome">
        <div className="inputButtons">
          <input
            className="inputSearch"
            placeholder="Insira um produto"
            type="text"
            onChange={this.handleChange}
          />
          <button
            className="buttonSearch"
            type="button"
            onClick={() => getProducts(null, query)}
          >
            <img src={lupa} alt="pesquisar" className="imgSearch" />
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
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
      </div>
    );
  }
}

ElementsHome.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ CartReducer: { cart } }) => ({
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (categoryId, query) => dispatch(
    fetchProducts(categoryId, query),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementsHome);
