import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {CssBaseline} from "@mui/material";
import {FlexibleThemeProvider} from "@/app/theme";

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
    <FlexibleThemeProvider>
      <CssBaseline />
      <body className={inter.className}>{children}</body>
    </FlexibleThemeProvider>
    </html>
  )
}
