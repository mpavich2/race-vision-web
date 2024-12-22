import { Box, Flex } from "@chakra-ui/react"
import { BackgroundImage } from "./backgroundImage"
import { LandingContent } from "./content"

export const LandingBox = () => {
  return (
    <Box position="relative" height='100%' width='100%'>
      <BackgroundImage />

      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        align="center"
        justify="start"
        direction="column"
      >
        <LandingContent />
      </Flex>
    </Box>
  )
}