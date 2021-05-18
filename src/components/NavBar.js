import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Button,
  NavbarToggler,
  Collapse
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import ModalContainer from './forms/ModalContainer';
import ChannelList from '../views/ChannelList';
import slackerLogo from '../slacklogo3.png';

export default function NavBar({
  user,
  channelArr,
  setChannelArr
}) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar id="navBar" className="sideNav" light expand="md">
          <Nav>
          <NavbarToggler onClick={toggleNavbar} className="mr-2 tog" />
          <Collapse isOpen={!collapsed} navbar>
            <ul className='slackNav'>
              <li className="nav-item">
              <Link id="home-link" className="nav-link" to="/"><img id="logo-img" src={slackerLogo} alt='slack-logo'></img></Link>
              </li>
              {
              user
              && <>
              <li>
                <ModalContainer
                setChannelArr={setChannelArr} />
              </li>
                <ul className='channel-list'>
                <ChannelList channelArr={channelArr}
                setChannelArr={setChannelArr} />
              </ul>
              </>
              }
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
            </Collapse>
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
