import { HomePage } from '@/pages/home'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import "./App.css"

function App() {

  return (
    <>
      <HomePage />
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
