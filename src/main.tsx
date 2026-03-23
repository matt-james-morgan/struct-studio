import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  fontFamily: '"Inter", system-ui, sans-serif',
  headings: {
    fontFamily: '"Inter", system-ui, sans-serif',
    fontWeight: '600',
  },
  primaryColor: 'navy',
  primaryShade: 7,
  defaultRadius: 'md',
  colors: {
    navy: [
      '#eef0f9',
      '#dde1f3',
      '#bbc3e7',
      '#99a5db',
      '#7787cf',
      '#5569c3',
      '#3a4fb5',
      '#1a2e6e',
      '#152559',
      '#0f1c44',
    ],
    crimson: [
      '#f9eef0',
      '#f2dde1',
      '#e5bbc3',
      '#d899a5',
      '#cb7787',
      '#be5569',
      '#a03347',
      '#6e1a2e',
      '#581525',
      '#42101b',
    ],
    sage: [
      '#eef4f3',
      '#ddeae7',
      '#bbd5cf',
      '#99c0b7',
      '#77ab9f',
      '#559687',
      '#47867a',
      '#3a6e63',
      '#2d564d',
      '#203e37',
    ],
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
