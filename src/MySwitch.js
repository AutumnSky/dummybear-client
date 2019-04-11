import React from 'react';
import { Switch, matchPath, withRouter } from 'react-router-dom';

class MySwitch extends Switch {
  render() {
    const location = this.props.location;

    let element, match;

    React.Children.forEach(this.props.children, (child) => {
      if (match == null && React.isValidElement(child)) {
        element = child;
        const path = child.props.path || child.props.from;

        if (child.type.checkName === 'withRouteValidator') {
          const isRouteValid = child.type.WrappedComponent.prototype.isRouteValid();
          if (isRouteValid && path) {
            match = matchPath(location.pathname, { ...child.props, path });
          }
        } else {
          if (path) {
            match = matchPath(location.pathname, { ...child.props, path });
          } else {
            match = location.pathname;
          }
        }
      }
    });

    return match ? React.cloneElement(element, { location, computedMatch: match }) : null;
  }
}

export default withRouter(MySwitch);
