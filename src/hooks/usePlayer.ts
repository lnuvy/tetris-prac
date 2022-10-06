import { STAGE_WIDTH } from '@constant/Block'
import { PLAYER } from '@typing/FE'
import { useCallback, useState } from 'react'
import { randomTetromino } from 'src/function'

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as PLAYER)

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number
    y: number
    collided: boolean
  }): void => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }))
  }

  const resetPlayer = useCallback((): void => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return { player, updatePlayerPos, resetPlayer }
}
