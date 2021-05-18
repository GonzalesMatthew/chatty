import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import ChannelList from '../views/ChannelList';
import slackerLogo from '../slacklogo3.png';

export default function NavBar({
  user,
  channelArr,
  setChannelArr,
  setModal
}) {
  const history = useHistory();
  return (
    <div>
      <Navbar id="navBar" light expand="md">
          <Nav className="sideNav" navbar>
            <ul className='slackNav'>
              <li className="nav-item">
              <Link id="home-link" className="nav-link" to="/"><img id="logo-img" src={slackerLogo} alt='slack-logo'></img></Link>
              </li>
              {
              user
              && <>
              <li className='add-channel-link' onClick={(() => {
                history.push('/add-channel/');
                setModal(true);
              })}>
                Add Channel <i className="fas fa-plus-circle"></i>
              </li>
                <ul className='channel-list'>
                <ChannelList
                  user={user}
                  channelArr={channelArr}
                  setChannelArr={setChannelArr}
                  setModal={setModal}
                />
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
          </Nav>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
  user: PropTypes.any,
  channelArr: PropTypes.array,
  setChannelArr: PropTypes.func,
  setModal: PropTypes.func
};
