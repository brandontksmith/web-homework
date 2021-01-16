import React from 'react'
import { arrayOf, string, shape } from 'prop-types'
import { styles } from '../../styles/table'

const makeDataTestId = (userId, fieldName) => `user-${userId}-${fieldName}`

export function UsersTable ({ data }) {
  return (
    <table border='0' cellPadding='0' cellSpacing='0' css={styles}>
      <tbody>
        <tr className='header'>
          <td>ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>D.O.B.</td>
        </tr>
        {
          data.map(user => {
            const { id, firstName, lastName, dob } = user
            return (
              <tr data-testid={`user-${id}`} key={`user-${id}`}>
                <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td data-testid={makeDataTestId(id, 'firstName')}>{firstName}</td>
                <td data-testid={makeDataTestId(id, 'lastName')}>{lastName}</td>
                <td data-testid={makeDataTestId(id, 'dob')}>{dob}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

  )
}

UsersTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    firstName: string,
    lastName: string,
    dob: string
  }))
}
