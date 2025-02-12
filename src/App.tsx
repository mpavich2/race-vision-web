import { HomePage } from '@/pages/home'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
