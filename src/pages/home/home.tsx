import { Button, Text } from "@chakra-ui/react"
import { RiDownloadLine } from "react-icons/ri"

export const HomePage = () => {
  const downloadButtonClicked = () => {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Download',
    })
  }
  
  return (
    <>
      <Text>Race Vision</Text>
      <Button onClick={downloadButtonClicked}><RiDownloadLine />Download Now</Button>
      <Text color="GrayText">v0.1.1</Text>
    </>
  )
}