import { Box, Flex } from "@chakra-ui/react"
import { BackgroundImage } from "./backgroundImage"
import { HeroContent } from "./content"

export const HeroBox = () => {
  return (
    <Box position="relative" height='100%' width='100%' maxH="1440px">
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
        <HeroContent />
      </Flex>
    </Box>
  )
}