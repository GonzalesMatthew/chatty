import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import ModalContainer from './forms/ModalContainer';
import ChannelList from '../views/ChannelList';

export default function NavBar({
  user,
  channelArr,
  setChannelArr
}) {
  return (
    <div>
      <Navbar id="navBar" light expand="md">
          <Nav className="sideNav" navbar>
            <ul className='slackNav'>
              <li className="nav-item">
              <Link to="/">Slacker</Link>
              </li>
              <li>
                <ModalContainer
                  setChannelArr={setChannelArr} />
              </li>
              <ul className='channel-list'>
                <ChannelList channelArr={channelArr}
                  setChannelArr={setChannelArr} />
              </ul>
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
  user: PropTypes.any,
  channelArr: PropTypes.array,
  setChannelArr: PropTypes.func
};
