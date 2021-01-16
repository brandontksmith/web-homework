import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GetTransactions, DeleteTransaction } from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { ErrorFragment } from '../components/ErrorFragment'
import { Loader } from '../components/Loader'
import { object } from 'prop-types'

export function Transactions ({ history }) {
  const { loading, error, data = {}, refetch } = useQuery(GetTransactions)
  const [deleteTransaction] = useMutation(DeleteTransaction, {
    update (cache, { data: { deleteTransaction } }) {
      const { id } = deleteTransaction
      const existingTransactions = cache.readQuery({ query: GetTransactions })
      const newTransactions = existingTransactions.transactions.filter(transaction => transaction.id !== id)

      cache.writeQuery({
        query: GetTransactions,
        data: { transactions: newTransactions }
      })
    }
  })

  useEffect(() => {
    refetch()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorFragment />
  }

  const handleDelete = (id) => deleteTransaction({ variables: { id } })

  return (
    <>
      <TxTable data={data.transactions} handleDelete={handleDelete} history={history} />
    </>
  )
}

Transactions.propTypes = {
  history: object
}
