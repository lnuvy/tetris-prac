import Theme from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    font: {
      font1: string
      font2: string
      font3: string
      font4: string
      font5: string
    }
    palette: {
      background: string
      border: string
      color1: string
      color2: string
      color3: string
      color4: string
    }
  }
}
