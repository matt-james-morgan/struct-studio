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
  primaryColor: 'violet',
  defaultRadius: 'md',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
