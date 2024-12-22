import { Logo } from "@/components/logo"
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react"
import { RiDownloadLine } from "react-icons/ri"


export const LandingContent = () => {
  const downloadButtonClicked = () => {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Download',
    })
  }

  return (
    <Flex direction="column">
      <Center>
        <Logo isRed />
      </Center>

      <Box marginTop="7rem" justifyItems="center">
        <Text textShadow="3px 3px 6px rgba(0, 0, 0, 0.5)" color="white" fontWeight="medium" fontSize="x-large">A Simple, Free <b>iRacing</b> Overlay Solution</Text>

        <Button size="lg" marginTop="2rem" colorPalette="red" onClick={downloadButtonClicked}><RiDownloadLine />Download Now</Button>
        
        <Text textShadow="3px 3px 6px rgba(0, 0, 0, 0.5)" marginTop="2rem" fontSize="large" color="white">v0.1.1</Text>
      </Box>
    </Flex>
  )
}