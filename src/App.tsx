import { HomePage } from '@/pages/home'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import "./App.css"
import { PageNotFound } from './pages/404'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
