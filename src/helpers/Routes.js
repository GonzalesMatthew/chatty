import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import MessageView from '../views/MessageView';
import ModalContainer from '../components/forms/ModalContainer';
// import TestRoute from '../components/cards/TestRoute';

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

export default function Routes({
  user,
  setChannelArr,
  modal,
  setModal
}) {
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
        path='/messages/:firebaseKey'
        user={user}
        component={() => <MessageView user={user} />}
        />
        <PrivateRoute
        exact
        path='/add-channel/'
        user={user}
        component={() => <ModalContainer user={user}
          setChannelArr={setChannelArr}
          modal={modal}
          setModal={setModal} />}
        />
        <PrivateRoute
        exact
        path='/channel/:firebaseKey'
        user={user}
        component={() => <ModalContainer user={user}
          setChannelArr={setChannelArr}
          modal={modal}
          setModal={setModal} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setChannelArr: PropTypes.func,
  modal: PropTypes.bool,
  setModal: PropTypes.func
};
