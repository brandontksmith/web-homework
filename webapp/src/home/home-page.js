import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/core'

export function Home () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return (
      <Fragment>
        <FontAwesomeIcon icon={['fas', 'circle-notch']} spin size="2x" />
        <div css={ loadingTextStyle }>Loading...</div>
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }

  return (
    <Fragment>
      <TxTable data={data.transactions} />
    </Fragment>
  )
}

const loadingTextStyle = css`
  margin-top: 10px;
`
