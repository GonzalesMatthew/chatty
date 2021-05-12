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
  currentChannel,
  setCurrentChannel,
  channelArr
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
                  currentChannel={currentChannel}
                  setCurrentChannel={setCurrentChannel} />
              </li>
                <ChannelList channelArr={channelArr} />
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
  currentChannel: PropTypes.object,
  setCurrentChannel: PropTypes.func,
  channelArr: PropTypes.array
};
