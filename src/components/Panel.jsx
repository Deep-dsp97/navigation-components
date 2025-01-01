import React from 'react';
import classNames from 'classnames';
// Reusable component to reduce 
// repeated css classnames
const Panel = ( {children, className, ...rest} ) => {

  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  )

  return (
    <div {...rest} className={finalClassNames}>{children}</div>
  )
}

export default Panel