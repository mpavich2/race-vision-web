import { Logo } from "@/components/logo"
import { IGithubRelease } from "@/types/githubRelease"
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react"
import { RiDownloadLine } from "react-icons/ri"
import { LearnMoreButton } from "../learnMoreButton"


export const HeroContent = (props: {
  releaseInfo?: IGithubRelease
}) => {
  const downloadButtonClicked = () => {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Download',
    })

    window.open(props.releaseInfo?.downloadUrl, '_self')
  }

  return (
    <Flex direction="column" justifyContent="space-between" h="100%" maxH="1440px">
      <Box>
        <Center>
          <Logo isRed />
        </Center>

        <Box marginTop={{ base: '2rem', md: '7rem' }} justifyItems="center">
          <Heading as="h1" textShadow="3px 3px 6px rgba(0, 0, 0, 0.5)" color="white" fontWeight="medium" fontSize={{ base: 'large', md: 'x-large' }}>
            A Simple, Free <b>iRacing</b> Overlay Tool
          </Heading>
          <Text as="h2" color="white" fontWeight="medium" fontSize={{ base: 'small', md: 'large' }} textShadow="3px 3px 6px rgba(0, 0, 0, 0.75)" mt={4} ml="auto" mr="auto" w="60%">
            RaceVision provides real-time race data and customizable overlays to improve your iRacing performance, all for free. Start using RaceVision today!
          </Text>

          <Button size="lg" marginTop="2rem" colorPalette="red" onClick={downloadButtonClicked}><RiDownloadLine />
            Download Now
          </Button>
          
          <Text as="p" textShadow="3px 3px 6px rgba(0, 0, 0, 0.5)" marginTop="2rem" fontSize="large" color="white">
            {props.releaseInfo?.version}
          </Text>
        </Box>
      </Box>

      <Box marginBottom="2rem">
        <LearnMoreButton />
      </Box>
    </Flex>
  )
}