import { HomePage } from '@/pages/home'
import { UnderConstructionPage } from "@/pages/underConstruction"
import "./App.css"

function App() {
  const isProd = import.meta.env.PROD

  return (
    <>
      {/* Temp show construction page for now */}
      {isProd ? <UnderConstructionPage /> : <HomePage />}
    </>
  )
}

export default App
