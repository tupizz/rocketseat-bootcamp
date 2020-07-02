import React from 'react';
import {
  Route as ReactRouteDOM,
  RouteProps as RouterDOMProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../context/AuthContextProvider';

interface RouteProps extends RouterDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Routes: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const isSigned = !!user;

  return (
    <ReactRouteDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === isSigned ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Routes;
