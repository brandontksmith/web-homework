import React from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { ErrorFragment } from '../components/ErrorFragment'
import { Loader } from '../components/Loader'

export function Transactions () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorFragment />
  }

  return (
    <>
      <TxTable data={data.transactions} />
    </>
  )
}
