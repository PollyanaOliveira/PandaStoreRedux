import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearProducts,
  sumProducts,
  backHome,
} from '../Redux/Actions';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { totalSumProducts } = this.props;
    totalSumProducts();
  }

  componentDidUpdate() {
    const { totalSumProducts } = this.props;
    totalSumProducts();
  }

  render() {
    const {
      cart,
      // countScreen,
      increaseQty,
      decreaseQty,
      removeIteM,
      clearProductS,
      backToHome,
    } = this.props;
    const haveCart = cart.length;
    if (!haveCart) {
      return (
        <div className="cartEmpty">
          <div>
            <h3>Carrinho de Compras</h3>
            <h5>Seu carrinho está vazio.</h5>
          </div>
          <div className="areaButtons">
            <button
              type="button"
              className="buttonHome"
              onClick={backToHome}
            >
              <Link to="/">
                Home
              </Link>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="cartFull">
        <div className="itemsCart">
          {cart.map(({
            id, title, price, thumbnail, availableQuantity, count, totalValue,
          }) => (
            <div key={id}>
              <div className="itemCart">
                <h4 className="title">{title}</h4>
                <img src={thumbnail} alt={title} />
                <h4>
                  {/* {`Qtide: ${countScreen.find((counT) => counT.id === id).count
                    .toLocaleString('pt-br', { minimumFractionDigits: 1 })}`} */}
                  {`Qtide: ${count
                    .toLocaleString('pt-br', { minimumFractionDigits: 1 })}`}
                </h4>
                <h4 className="price">
                  {`Preço: R$ ${price
                    .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
                </h4>
                <h3 className="totalValue">
                  Total R$:
                  {
                    totalValue
                      .toLocaleString('pt-br', { minimumFractionDigits: 2 })
                  }
                </h3>

                <div className="itemButtons">
                  <button
                    className="increase"
                    type="button"
                    disabled={count >= availableQuantity}
                    onClick={() => increaseQty(id, count)}
                  >
                    +
                  </button>
                  <button
                    className="decrease"
                    type="button"
                    onClick={() => decreaseQty(id)}
                  >
                    -
                  </button>
                  <button
                    className="remove"
                    type="button"
                    onClick={() => removeIteM(id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="areaButtons">
          <button
            type="button"
            className="buttonCheckout"
          >
            <Link
              to="/checkout"
            >
              Finalizar Compra
            </Link>
          </button>
          <button
            type="button"
            className="buttonClear"
            onClick={clearProductS}
          >
            Limpar Produtos
          </button>
          <button
            type="button"
            className="buttonHome"
            onClick={backToHome}
          >
            <Link to="/">
              Home
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  // countScreen: PropTypes.arrayOf(PropTypes.object).isRequired,
  increaseQty: PropTypes.func.isRequired,
  decreaseQty: PropTypes.func.isRequired,
  removeIteM: PropTypes.func.isRequired,
  clearProductS: PropTypes.func.isRequired,
  totalSumProducts: PropTypes.func.isRequired,
  backToHome: PropTypes.func.isRequired,
};

const mapStateToProps = ({ CartReducer: { cart, countScreen } }) => ({
  cart,
  countScreen,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQty: (id, countIncrease) => dispatch(
    increaseQuantity(id, countIncrease),
  ),
  decreaseQty: (id) => dispatch(
    decreaseQuantity(id),
  ),
  removeIteM: (id) => dispatch(
    removeItem(id),
  ),
  clearProductS: () => dispatch(
    clearProducts(),
  ),
  totalSumProducts: () => dispatch(
    sumProducts(),
  ),
  backToHome: () => dispatch(
    backHome(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
