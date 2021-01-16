import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { Users } from './users'
import { Transactions } from './transactions'

import { Nav } from './components/nav'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUsers, faCircleNotch, faMoneyCheck, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUsers, faCircleNotch, faMoneyCheck, faPlusCircle)

function AppRouter () {
  return (
    <Router>
      <Nav />
      <div css={layoutStyle}>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Users} exact path='/users' />
          <Route component={Transactions} exact path='/transactions' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
  display: flex;
  flex-direction: row;
  margin-left: 235px;
  min-height: 100%;
`

const contentStyle = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px 10px 10px 0;
`
