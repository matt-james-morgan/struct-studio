import { Routes, Route } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

export default function App() {
  return (
    <AppShell header={{ height: 64 }} padding={0}>
      <AppShell.Header>
        <Nav />
      </AppShell.Header>
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppShell.Main>
    </AppShell>
  )
}
