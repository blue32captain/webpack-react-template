import React from 'react'
import PropTypes from 'prop-types'

import Figure from './Figure'
import Description from './Description'



const Block = ({ children, ...rest }) => (
  <div {...rest}>
    {children}
  </div>
);


const ProductCart = ({ children, ...rest }) => {

  if (children) {
    return (
      <Block {...rest}>{children}</Block>
    );
  }

  return (
    <Block {...rest}>
      <Figure />
      <Description />
    </Block>
  );
};


ProductCart.propTypes = {
  rest: PropTypes.objectOf({
    className: PropTypes.string.isRequired,
  })
};


export default ProductCart
