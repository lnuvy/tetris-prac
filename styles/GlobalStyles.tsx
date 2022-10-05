import { Global, css } from '@emotion/react'

const styles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  .flex-s {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .flex-c {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-sb {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-e {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .flex-c-s {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .flex-c-c {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .flex-c-e {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }
`

const GlobalStyles = () => {
  return <Global styles={styles} />
}

export default GlobalStyles
