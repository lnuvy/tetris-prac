import { TETROMINOS } from '@constant/Block'

export interface CellProps {
  type: keyof typeof TETROMINOS
  color: string
}

export interface DisplayProps {
  gameOver?: boolean
}
