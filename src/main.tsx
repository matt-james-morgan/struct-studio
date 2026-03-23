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
  primaryColor: 'forest',
  primaryShade: 5,
  defaultRadius: 'md',
  colors: {
    forest: [
      '#e8f7f1',
      '#d1efe3',
      '#a3dfca',
      '#75cfb1',
      '#52bf90',
      '#419873',
      '#398564',
      '#317256',
      '#265e45',
      '#1a4a34',
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
