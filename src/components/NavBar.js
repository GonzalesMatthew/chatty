import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

export default function NavBar({ user }) {
  return (
    <div>
      <Navbar id="navBar" light expand="md">
          <Nav className="sideNav" navbar>
            <ul>
              <li className="nav-item">
              <Link to="/">Slacker</Link>
              </li>
                {
                  user !== null
                  && <li>
                    {
                      user
                        ? <Button className="nav-item" id="logOutBtn" onClick={signOutUser}>Sign Out</Button>
                        : <Button className="nav-item" id="logInBtn" onClick={signInUser}>Sign In</Button>
                    }
                </li>
                }
            </ul>
          </Nav>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
  user: PropTypes.any
};
