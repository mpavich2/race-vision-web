import { Button, Text } from "@chakra-ui/react"
import { RiDownloadLine } from "react-icons/ri"
import "./App.css"
import { UnderConstruction } from "./components/underConstruction"

function App() {
  const isProd = import.meta.env.PROD

  const downloadButtonClicked = () => {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Download',
    })
  }

  return (
    <>
      {isProd && <UnderConstruction />}

      {!isProd && (
        <>
          <Text>Race Vision</Text>
          <Button onClick={downloadButtonClicked}><RiDownloadLine />Download Now</Button>
          <Text color="GrayText">v0.1.1</Text>
        </>
      )}
    </>
  )
}

export default App
