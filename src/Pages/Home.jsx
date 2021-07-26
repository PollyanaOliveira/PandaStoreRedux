import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ElementsHome from '../Components/ElementsHome';
import ProductsList from '../Components/ProductsList';
import Categories from '../Components/Categories';
import { fetchCategories } from '../Redux/Actions';

class Home extends Component {
  constructor() {
    super();
    this.state = { };
  }

  componentDidMount() {
    const { categories } = this.props;
    categories();
  }

  render() {
    const { fetchOn } = this.props;
    if (fetchOn) {
      return (
        <div>
          <ElementsHome />
          <div className="Cards">
            <Categories />
            <ProductsList />
          </div>
        </div>
      );
    }
    return (
      <div className="pandaBG">
        <ElementsHome />
        <Categories />
      </div>
    );
  }
}

Home.propTypes = {
  fetchOn: PropTypes.bool.isRequired,
  categories: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  ProductsReducer: { fetchOn },
}) => ({
  fetchOn,
});

const mapDispatchToProps = (dispatch) => ({
  categories: () => dispatch(
    fetchCategories(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
