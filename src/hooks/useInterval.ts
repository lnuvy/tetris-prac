import { useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<null | (() => void)>(null)

  // useRef를 이용해서 함수를 props 로 넘겨 주입하는 방식
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // setInterval 함수 사용법
  useEffect(() => {
    function tick(): void {
      if (savedCallback.current) savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => {
        clearInterval(id)
      }
    }
  }, [delay])
}
