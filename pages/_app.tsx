import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'
import { QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient } from '@tanstack/query-core'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
