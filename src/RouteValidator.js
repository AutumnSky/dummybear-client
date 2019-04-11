import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

function withRouteValidator(Component) {
  const displayName = `withRouteValidator(${Component.displayName || Component.name})`;

  const C = (props) => {
    console.log('thiasldkfj?', this.props);
    return <Component {...props} />;
  };

  C.displayName = displayName;
  C.checkName = 'withRouteValidator';
  C.WrappedComponent = Component;

  return hoistStatics(C, Component);
}

export default withRouteValidator;
