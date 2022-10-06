import { StyledStartButton } from '@styles/Common'
import React from 'react'

interface Props {
  callback: () => void
}

const StartButton: React.FC<Props> = ({ callback }) => {
  return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
}

export default StartButton
