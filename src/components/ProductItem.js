import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  return (
    <div className="product__card">
      <img
        className="product__image"
        src={product.media.source}
        alt={product.name}
      />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p
          className="product__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
          <button
            name="Add to cart"
            className="product__btn"
            onClick={handleAddToCart}
          >
            Quick add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object
};
