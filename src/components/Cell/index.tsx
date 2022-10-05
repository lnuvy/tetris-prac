import { TETROMINOS } from '@constant/Block'
import { StyledCell } from '@styles/Common.styles'
import { CellProps } from '@typing/FE'
import React from 'react'

const Cell: React.FC<CellProps> = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />
}

export default React.memo(Cell)
