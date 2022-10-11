import { TETROMINOS } from '@constant/Block'
import { StyledCell } from '@styles/Common'
import { CellProps } from '@typing/FE'
import React from 'react'

interface Props {
  type: keyof typeof TETROMINOS
}

const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default React.memo(Cell)
