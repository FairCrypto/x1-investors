import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {CssBaseline} from "@mui/material";
import {FlexibleThemeProvider} from "@/app/theme";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X1 Investors',
  description: 'List of investors in X1 by country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>X1 | Investors</title>
        <meta name="description" content="X1 Global Raise Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <FlexibleThemeProvider>
          <CssBaseline />
          {children}
        </FlexibleThemeProvider>
      </body>
    </html>
  )
}
