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
  const channels = [
    {
      id: 1,
      name: 'boogie',
    },
    {
      id: 2,
      name: 'cookies',
    },
    {
      id: 1,
      name: 'sleepy',

    }
  ];
  const showChannels = () => (
    <>
      {channels.map((channel) => (
      <li key={channel.id}>
        <Link>#{channel.name}</Link>
      </li>
      ))}
    </>
  );
  return (
    <div>
      <Navbar id="navBar" light expand="md">
          <Nav className="sideNav" navbar>
            <ul>
              <li className="nav-item">
              <Link id="home-link" className="nav-link" to="/">Slacker</Link>
              {showChannels()}
              </li>
                {
                  user !== null
                  && <li>
                    {
                      user
                        ? <Button id="logOutBtn" onClick={signOutUser}>Sign Out</Button>
                        : <Button id="logInBtn" onClick={signInUser}>Sign In</Button>
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
