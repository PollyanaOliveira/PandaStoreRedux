import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { backHome, finishBuy, sumProducts } from '../Redux/Actions';

class Checkout extends Component {
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
      buyCompleted,
      backToHome,
      cart,
      totalSum,
    } = this.props;

    const haveCart = cart.length;

    if (!haveCart) {
      return (
        <div className="cartEmpty">
          <div>
            <h2>Resumo da Compra</h2>
            <h5>Seu carrinho está vazio.</h5>
          </div>
          <div className="areaButtons">
            <button
              type="button"
              className="buttonHome"
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
      <div className="checkoutFull">
        <div className="itemsCart">
          {cart.map(
            (
              {
                id, thumbnail, title, totalValue, count,
              },
            ) => (
              <div key={id}>
                <div className="itemCheckout">
                  <img src={thumbnail} alt={title} />
                  <h4 className="title">{title}</h4>
                  <h4>{ `Qtide: ${count}` }</h4>
                  <h3 className="price">
                    { `Valor R$:
                    ${totalValue.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
                  </h3>
                </div>
              </div>
            ),
          ) }
        </div>
        <h4 className="totalValue">
          {
            `VALOR TOTAL DO PRODUTOS:
            R$ ${totalSum.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`
          }
        </h4>
        <br />
        <div className="areaButtons">
          <button
            type="button"
            className="buttonCheckout"
          >
            <Link
              to="/"
              onClick={buyCompleted}
            >
              Comprar
            </Link>
          </button>
          <button
            type="button"
            className="buttonCancel"
          >
            <Link
              to="/"
              onClick={buyCompleted}
            >
              Cancelar Compra
            </Link>
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

Checkout.propTypes = {
  buyCompleted: PropTypes.func.isRequired,
  totalSumProducts: PropTypes.func.isRequired,
  backToHome: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalSum: PropTypes.number.isRequired,
};

const mapStateToProps = ({ CartReducer: { cart, totalSum } }) => ({
  cart,
  totalSum,
});

const mapDispatchToProps = (dispatch) => ({
  buyCompleted: () => dispatch(
    finishBuy(),
  ),
  totalSumProducts: () => dispatch(
    sumProducts(),
  ),
  backToHome: () => dispatch(
    backHome(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
