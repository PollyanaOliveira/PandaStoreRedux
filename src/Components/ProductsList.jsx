import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCart } from '../Redux/Actions';

import ProductCard from './ProductCard';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { products, addToCart } = this.props;
    return (
      <div className="items">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
            <button
              type="button"
              className="buttonDetails"
            >
              <Link to={{
                pathname: `/details/${product.id}`,
                state: { product },
              }}
              >
                Mais Detalhes
              </Link>
            </button>
            <button
              type="button"
              className="buttonCart"
              onClick={() => addToCart(product, product.id)}
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ProductsReducer: { products } }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, id) => dispatch(
    addCart(product, id),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
