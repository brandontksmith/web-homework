import React from 'react'
import { VictoryPie } from 'victory'
import { useQuery } from '@apollo/client'
import { GetTransactions } from '../gql/transactions.gql'
import { ErrorFragment } from '../components/ErrorFragment'
import { Loader } from '../components/Loader'
import { css } from '@emotion/core'
import NumberFormat from 'react-number-format'
import { number } from 'prop-types'

const CurrencyFormat = (props) => {
  const { value } = props

  return (
    <NumberFormat
      decimalScale={2}
      displayType={'text'}
      fixedDecimalScale
      prefix={'$'}
      thousandSeparator
      value={value}
    />
  )
}

export function Home () {
  let { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorFragment />
  }

  const colors = ['red', 'orange']

  const pieData = [
    { x: 'Credit', y: 0
    },
    { x: 'Debit', y: 0
    }
  ]

  data.transactions.forEach(transaction => {
    if (transaction.credit) {
      pieData[0].y += transaction.amount
    } else if (transaction.debit) {
      pieData[1].y += transaction.amount
    }
  })

  return (
    <div css={homeStyle}>
      <div className='row'>
        <div className='col'>
          <h3 className='text-center'>All-Time Spend by Transaction Type</h3>

          <VictoryPie
            colorScale={colors}
            data={pieData}
            height={300}
            innerRadius={60}
            padding={60}
          />

          <div className='row'>
            <div className='col text-center'>
              <span className='bold'>Credit: </span>
              <CurrencyFormat value={pieData[0].y} />
            </div>

            <div className='col text-center'>
              <span className='bold'>Debit: </span>
              <CurrencyFormat value={pieData[1].y} />
            </div>
          </div>
        </div>

        <div className='col text-center'>
          <ErrorFragment />
        </div>
      </div>
    </div>
  )
}

const homeStyle = css`
  display: flex;
  width: 100%;

  .bold {
    font-weight: 700;
  }

  .text-center {
    text-align: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .col {
    flex: 1;
  }
`

CurrencyFormat.propTypes = {
  value: number
}
