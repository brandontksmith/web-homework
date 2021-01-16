import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ErrorFragment } from '../components/ErrorFragment'
import { Loader } from '../components/Loader'
import { GetTransaction, UpdateTransaction } from '../gql/transactions.gql'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/core'
import { toast } from 'react-toastify'
import { TxForm } from '../components/transactions/TxForm'
import { object } from 'prop-types'

export function EditTransaction ({ match, ...rest }) {
  const { id } = match.params
  const { loading, error, data = {} } = useQuery(GetTransaction, {
    variables: { id }
  })
  const [updateTransaction] = useMutation(UpdateTransaction)

  const [form, setForm] = useState({
    id: '',
    user_id: '',
    description: '',
    merchant_id: '',
    debit: false,
    credit: false,
    amount: 0
  })

  useEffect(() => {
    setForm({ ...data.transaction })
  }, [loading])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorFragment />
  }

  const handleSave = (e) => {
    updateTransaction({ variables: { ...form } }).then((data) => {
      toast('Transaction has been saved.', {
        type: toast.TYPE.SUCCESS
      })
    }).catch(err => {
      console.log(err)
      toast('Transaction failed to save.', {
        type: toast.TYPE.ERROR
      })
    })
  }

  return (
    <div css={editTransactionStyle}>
      <Link to='/transactions'>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} /> Back to Transactions
      </Link>

      <TxForm form={form} handleSave={handleSave} setForm={setForm} />
    </div>
  )
}

const editTransactionStyle = css`
  a {
    text-decoration: none;
    color: #676767;
  }
`

EditTransaction.propTypes = {
  match: object
}
