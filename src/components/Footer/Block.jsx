import React from 'react'

const Block = ({ children, ...rest }) => (
  <div {...rest}>
    {children}
  </div>
);


export default Block;
