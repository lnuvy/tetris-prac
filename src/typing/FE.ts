import { TETROMINOS } from '@constant/Block'

export interface CellProps {
  type: keyof typeof TETROMINOS
  color: string
}

export interface DisplayProps {
  gameOver?: boolean
}

export interface Player {
  pos: {
    x: number
    y: number
  }
  tetromino: (string | number)[][]
  collided: boolean
}
