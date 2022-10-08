import React, { useEffect, useState } from 'react'
import { ROWPOINTS } from '@constant/Block'

export const useGameStatus = (rowsCleard: number) => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(1)

  useEffect(() => {
    if (rowsCleard > 0) {
      setScore((prev) => prev + ROWPOINTS[rowsCleard - 1] * level)
      setRows((prev) => prev + rowsCleard)
    }
  }, [rowsCleard])

  return { score, setScore, rows, setRows, level, setLevel }
}
