import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import MessageView from '../views/MessageView';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={() => <Home user={user} />}
        />
        <PrivateRoute
        exact
        path='/:firebaseKey'
        user={user}
        component={() => <MessageView user={user} />}
        />
        </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
