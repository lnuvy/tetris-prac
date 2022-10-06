import { StyledDisplay } from '@styles/Common'
import { DisplayProps } from '@typing/FE'
import React from 'react'

interface Props extends DisplayProps {
  text: string
}

const Display: React.FC<Props> = ({ gameOver, text }) => {
  return <StyledDisplay>{text}</StyledDisplay>
}

export default Display
