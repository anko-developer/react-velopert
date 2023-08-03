import React from 'react';
import './Button.scss';
import classNames from 'classnames';

export default function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  ...rest
}) {
  // return <button className={['Button', size].join(' ')}>{children}</button>;
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};
