import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetUsers from '../gql/users.gql'
import { UsersTable } from '../components/users/UsersTable'
import { ErrorFragment } from '../components/ErrorFragment'
import { Loader } from '../components/Loader'

export function Users () {
  const { loading, error, data = {} } = useQuery(GetUsers)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorFragment />
  }

  return (
    <Fragment>
      <UsersTable data={data.users} />
    </Fragment>
  )
}
