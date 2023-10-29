'use client'

import React, { useEffect, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components'
import ReactGA from 'react-ga'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/theme/default'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  async function initializeGAnalytics() {
    await ReactGA.initialize(`${process.env.VITE_ANALYTICS_ID}`)
    await ReactGA.pageview(window.location.pathname + window.location.search)
  }

  useEffect(() => {
    initializeGAnalytics()
  }, [])

  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={defaultTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </StyleSheetManager>
  )
}
