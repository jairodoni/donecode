'use client'

import React, { ReactNode, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'
import { ProfileProvider } from '@/contexts/profile'

export default function StyledRegistry({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    const styles = (
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lexend:wght@300;400;500;600;700;900&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
    )
    return <>{styles}</>
  })

  return (
    <StyleRegistry>
      <ProfileProvider>{children}</ProfileProvider>
    </StyleRegistry>
  )
}
