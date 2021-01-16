import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

/**
 * @todo: add an onClick handler to the li so the route can be navigated to
 * simply by clicking on the list item, or do away with the list entirely.
 */
export const Nav = (props) => {
  return (
    <nav css={navStyle}>
      <div className='logo-wrapper'>
        <img alt='Divvy' className='logo' src={logo} />
      </div>

      <ul>
        <li>
          <Link to='/'>
            <FontAwesomeIcon fixedWidth icon={['fas', 'home']} /> Home
          </Link>
        </li>
        <li>
          <Link to='/users'>
            <FontAwesomeIcon fixedWidth icon={['fas', 'users']} /> Users
          </Link>
        </li>
        <li>
          <Link to='/transactions'>
            <FontAwesomeIcon fixedWidth icon={['fas', 'money-check']} /> Transactions
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const navStyle = css`
  background: #dddacd;
  width: 225px;
  position: fixed;
  top: 0;
  bottom: 0;

  & > .logo-wrapper {
    padding: 10px;
    text-align: center;
  }

  & >  .logo-wrapper > .logo {
    max-width: 75%;
  }

  & > ul > li > a {
    color: #676767;
    text-decoration: none;
    font-weight: 700;
  }

  & > ul > li > a > svg {
    margin-right: 5px;
  }

  & > ul > li > a:hover, & > ul > li:hover > a {
    color: #000000;
  }

  & > ul > li:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  & > ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
  }

  & > ul > li {
    flex: 1;
    padding: 5px 0 5px 10px;
  }
`
