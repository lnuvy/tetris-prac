import React, { useEffect, useState } from 'react'
import { createStage } from 'src/utils'
import type { Player } from '@typing/FE'

export type STAGECELL = [string | number, string]
export type STAGE = STAGECELL[][]

export const useStage = (player: Player, resetPlayer: () => void) => {
  const [stage, setStage] = useState(createStage())
  const [rowsCleard, setRowsCleard] = useState(0)

  useEffect(() => {
    if (!player.pos) return

    setRowsCleard(0)

    const sweepRows = (newStage: STAGE): STAGE => {
      return newStage.reduce((ack, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleard((prev) => prev + 1)

          ack.unshift(
            new Array(newStage[0].length).fill([0, 'clear']) as STAGECELL[],
          )
          return ack
        }

        ack.push(row)
        return ack
      }, [] as STAGE)
    }

    const updateStage = (prevStage: STAGE): STAGE => {
      const newStage = prevStage.map(
        (row) =>
          row.map((cell) =>
            cell[1] === 'clear' ? [0, 'clear'] : cell,
          ) as STAGECELL[],
      )

      // 그리기
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ]
          }
        })
      })

      if (player.collided) {
        resetPlayer()
        return sweepRows(newStage)
      }

      return newStage
    }
    setStage((prev) => updateStage(prev))
  }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino])

  return { stage, setStage, rowsCleard }
}
