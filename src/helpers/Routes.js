import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Messages from '../views/Messages';

export default function Routes({ user, messages, setMessages }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          path='/cooking-with-css'
          user={user}
          component={
            () => <Messages
              messages={messages}
              setMessages={setMessages}
              user={user}/>
          }
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  user: PropTypes.any
};
