import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/core'

export const Loader = (props) => {
  return (
    <div css={loaderStyle}>
      <FontAwesomeIcon icon={['fas', 'circle-notch']} size='2x' spin />
    </div>
  )
}

const loaderStyle = css`
    position: fixed;
    left: calc(50% + ((150px + 42px) / 2));
    top: calc(50% - 52px / 2);
    text-align: center;
`
