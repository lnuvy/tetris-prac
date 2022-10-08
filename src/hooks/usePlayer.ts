import { useCallback, useState } from 'react'
import { STAGE_WIDTH } from '@constant/Block'

import { Player } from '@typing/FE'
import { isColliding, randomTetromino } from 'src/utils'
import { STAGE } from './useStage'

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as Player)

  const rotate = (matrix: Player['tetromino']) => {
    const mtx = matrix.map((_, i) => matrix.map((column) => column[i]))
    return mtx.map((row) => row.reverse())
  }

  const playerRotate = (stage: STAGE): void => {
    const clone = JSON.parse(JSON.stringify(player))
    clone.tetromino = rotate(clone.tetromino)

    // 회전시 예외처리
    const posX = clone.pos.x
    let offset = 1
    while (isColliding(clone, stage, { x: 0, y: 0 })) {
      clone.pos.x += offset
      offset = -(offset + (offset > 0 ? 1 : -1))

      if (offset > clone.tetromino[0].length) {
        clone.pos.x = posX
        return
      }
    }

    setPlayer(clone)
  }

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

  return { player, updatePlayerPos, resetPlayer, playerRotate }
}
