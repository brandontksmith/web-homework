import React from 'react'
import { css } from '@emotion/core'
import { string, bool, number, shape, func } from 'prop-types'

export function TxForm (props) {
  const { form, setForm, handleSave } = props

  const onCreditDebitChange = (e) => {
    const value = e.target.value

    if (value === 'credit') {
      setForm({ ...form, credit: true, debit: false })
    } else if (value === 'debit') {
      setForm({ ...form, credit: false, debit: true })
    }
  }

  /**
   * @todo: technically the amount should never be more than two decimal places,
   * and we should validate that the user_id exists. A searchable dropdown/select
   * would provide a better UX/UI.
   */
  const onValueChange = (e) => {
    if (!e || !e.target) {
      return
    }

    const name = e.target.name
    let value = e.target.value

    if (name === 'amount') {
      value = parseFloat(value)
    }

    setForm({ ...form, [name]: value })
  }

  return (
    <form css={formStyle}>
      <div className='form-group'>
        <label className='form-label' htmlFor='id'>ID</label>
        <input className='id' disabled name='id' type='text' value={form.id} />
      </div>

      <div className='form-group'>
        <label className='form-label' htmlFor='user_id'>User ID</label>
        <input className='user_id' name='user_id' onChange={onValueChange} type='text' value={form.user_id} />
      </div>

      <div className='form-group'>
        <label className='form-label' htmlFor='merchant_id'>Merchant ID</label>
        <input className='merchantId' name='merchant_id' onChange={onValueChange} type='text' value={form.merchant_id} />
      </div>

      <div className='form-group'>
        <label className='form-label' htmlFor='amount'>Amount</label>
        <input className='amount' name='amount' onChange={onValueChange} type='number' value={form.amount} />
      </div>

      <div className='form-group'>
        <label className='form-label' htmlFor='description'>Description</label>
        <textarea className='description' name='description' onChange={onValueChange} value={form.description} />
      </div>

      <div className='form-group'>
        <label className='form-label' htmlFor='creditOrDebit'>Credit or Debit?</label>

        <label className='radio-label' htmlFor='credit'>
          <input checked={form.credit === true} name='credit' onChange={onCreditDebitChange} type='radio' value='credit' /> Credit
        </label>

        <label className='radio-label'>
          <input checked={form.debit === true} name='debit' onChange={onCreditDebitChange} type='radio' value='debit' /> Debit
        </label>
      </div>

      <div className='form-group'>
        <button className='save-btn' onClick={handleSave} type='button'>Save Transaction</button>
      </div>
    </form>
  )
}

const formStyle = css`
  margin-top: 15px;

  .save-btn {
    border: 0;
    padding: 10px;
    background: green;
    color: white;
    border-radius: 4px 4px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group:last-of-type {
    margin-bottom: 0;
  }

  .form-label {
    display: block;
    font-weight: 700;
  }

  .radio-label {
    margin-right: 15px;
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #dddacd;
    border-radius: 4px 4px;
  }

  textarea {
    height: 75px;
    width: 50%;
  }
`

TxForm.propTypes = {
  form: shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }),
  setForm: func,
  handleSave: func
}
