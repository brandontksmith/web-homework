import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/core'

export const Loader = (props) => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={['fas', 'circle-notch']} size='2x' spin />
      <div css={loadingTextStyle}>Loading...</div>
    </Fragment>
  )
}

const loadingTextStyle = css`
  margin-top: 10px;
`
