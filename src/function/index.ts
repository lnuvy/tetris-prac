import { STAGE_WIDTH, STAGE_HEIGHT } from '@constant/Block'
import { TETROMINOS } from '@constant/Block'

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']))

export const randomTetromino = () => {
  const tetrominos = [
    'I',
    'J',
    'L',
    'O',
    'S',
    'T',
    'Z',
  ] as (keyof typeof TETROMINOS)[]
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)]
  return TETROMINOS[randTetromino]
}
