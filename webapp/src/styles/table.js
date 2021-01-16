import { css } from '@emotion/core'

export const styles = css`
  width: 100%;

 .header {
   font-weight: bold;
   color: #676767;
 }

 tr:nth-child(even) {
   background: rgba(221, 218, 206, 0.3);
 }

 tr:nth-child(odd) {
   background: #FFFFFF;
 }

 tr:first-of-type {
   background: rgb(221, 218, 206);
 }

 tr:hover {
   background: rgb(221, 218, 206);
 }

 td {
   padding: 4px;

   &.credit, &.debit {
     text-align: center;
   }

   &.actions {
     min-width: 75px;

     & > button {
       margin: 0 2px 0 2px;
     }
   }
 }
`
