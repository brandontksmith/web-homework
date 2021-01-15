import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes'
import { ApolloProvider } from '@apollo/client'
import { client } from './network/apollo-client'
import { css } from '@emotion/core'

const wrapperStyle = css`
  flex: 1;
`

ReactDOM.render(
  (
    <div data-app-init='' css={ wrapperStyle }>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </div>
  ),
  document.getElementById('react-app')
)
