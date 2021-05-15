import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import MessageView from '../views/MessageView';

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={Home}
        />
        <Route
        exact
        path='/:firebaseKey'
        component={() => <MessageView user={user} />}
        />
        </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.object
};
