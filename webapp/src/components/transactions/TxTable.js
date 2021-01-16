import React from 'react'
import { arrayOf, string, bool, number, shape, object, func } from 'prop-types'
import { styles } from '../../styles/table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/core'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data, handleDelete, history }) {
  const handleEditAction = (id) => {
    history.push(`/transactions/${id}`)
  }

  return (
    <table border='0' cellPadding='0' cellSpacing='0' css={styles}>
      <tbody>
        <tr className='header'>
          <td>ID</td>
          <td>User ID</td>
          <td>Description</td>
          <td>Merchant ID</td>
          <td>Debit</td>
          <td>Credit</td>
          <td>Amount</td>
          <td>Actions</td>
        </tr>
        {
          data.map(tx => {
            const { id, user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx

            let debitIcon = ['fas', 'times-circle']
            let creditIcon = ['fas', 'times-circle']

            if (debit) {
              debitIcon = ['fas', 'check-circle']
            }

            if (credit) {
              creditIcon = ['fas', 'check-circle']
            }

            return (
              <tr data-testid={`transaction-${id}`} key={`transaction-${id}`}>
                <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
                <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                <td data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                <td className='debit' data-testid={makeDataTestId(id, 'debit')}>
                  <FontAwesomeIcon color={debit ? 'green' : 'red'} icon={debitIcon} />
                </td>
                <td className='credit' data-testid={makeDataTestId(id, 'credit')}>
                  <FontAwesomeIcon color={credit ? 'green' : 'red'} icon={creditIcon} />
                </td>
                <td data-testid={makeDataTestId(id, 'amount')}>{amount}</td>
                <td className='actions' data-testid={makeDataTestId(id, 'actions')}>
                  <button css={deleteBtnStyle} onClick={(e) => handleDelete(id)}>
                    <FontAwesomeIcon icon={['fas', 'times']} />
                  </button>

                  <button css={editBtnStyle} onClick={(e) => handleEditAction(id)}>
                    <FontAwesomeIcon icon={['fas', 'edit']} />
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

const deleteBtnStyle = css`
    border: 0;
    background: red;
    padding: 4px 8px 4px 8px;
    color: #FFFFFF;
    border-radius: 4px 4px;
`

const editBtnStyle = css`
    border: 0;
    background: green;
    padding: 4px 8px 4px 8px;
    color: #FFFFFF;
    border-radius: 4px 4px;
`

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  })),
  handleDelete: func,
  history: object
}
