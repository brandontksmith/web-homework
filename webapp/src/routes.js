import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { Users } from './users'

import logo from './logo.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUsers, faCircleNotch)

function AppRouter () {
  return (
    <Router>
      <nav css={navStyle}>
        <div className="logo-wrapper">
          <img className="logo" src={ logo } alt="Divvy" />
        </div>

        <ul>
          <li>
            <Link to='/'>
              <FontAwesomeIcon icon={['fas', 'home']} fluid /> Home
            </Link>
          </li>
          <li>
            <Link to='/users'>
              <FontAwesomeIcon icon={['fas', 'users']} fluid /> Users
            </Link>
          </li>
        </ul>
      </nav>

      <div css={layoutStyle}>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Users} exact path='/users' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
  display: flex;
  grid-row-gap: 24px;
  flex-direction: row;
  margin-left: 235px;
  min-height: 100%;
`

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

const contentStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`
