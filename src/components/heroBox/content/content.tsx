import { Logo } from "@/components/logo"
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react"
import { RiDownloadLine } from "react-icons/ri"
import { LearnMoreButton } from "../learnMoreButton"


export const HeroContent = () => {
  const downloadButtonClicked = () => {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Download',
    })

    window.open('/RaceVision.Setup.exe', '_self')
  }

  return (
    <Flex direction="column" justifyContent="space-between" h="100%" maxH="1440px">
      <Box>
        <Center>
          <Logo isRed />
        </Center>

        <Box marginTop="7rem" justifyItems="center">
          <Heading as="h1" textShadow="3px 3px 6px rgba(0, 0, 0, 0.5)" color="white" fontWeight="medium" fontSize="x-large">A Simple, Free <b>iRacing</b> Overlay Solution</Heading>

          <Button size="lg" marginTop="2rem" colorPalette="red" onClick={downloadButtonClicked}><RiDownloadLine />Download Now</Button>
          
          <Text as="p" textShadow="3px 3px 6px rgba(0, 0, 0, 0.5)" marginTop="2rem" fontSize="large" color="white">v0.1.0-alpha</Text>
        </Box>
      </Box>

      <Box marginBottom="2rem">
        <LearnMoreButton />
      </Box>
    </Flex>
  )
}