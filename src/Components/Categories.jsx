import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from '../Redux/Actions';

class Categories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  oneWordCategories = (name) => {
    const singleName = name.split(' ')[0];
    const noComma = singleName.split(',')[0];
    return noComma;
  }

  render() {
    const { listCategories, clickCategory } = this.props;
    return (
      <div className="categoriesBar">
        <div className="categories">
          {listCategories.map(({ name, id }) => (
            <button
              key={id}
              type="button"
              value={id}
              onClick={() => clickCategory(id)}
            >
              {this.oneWordCategories(name)}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  listCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickCategory: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  CategoriesListReducer: { listCategories },
}) => ({
  listCategories,
});

const mapDispatchToProps = (dispatch) => ({
  clickCategory: (categoryId, query) => dispatch(
    fetchProducts(categoryId, query),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
