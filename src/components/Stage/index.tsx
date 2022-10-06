import Cell from '@components/Cell'
import { TETROMINOS } from '@constant/Block'
import { StyledStage } from '@styles/Common'
import React from 'react'

type STAGECELL = [keyof typeof TETROMINOS, string]

interface Props {
  stage: STAGECELL[][]
}

const Stage: React.FC<Props> = ({ stage }) => {
  return (
    <StyledStage>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />),
      )}
    </StyledStage>
  )
}

export default Stage
