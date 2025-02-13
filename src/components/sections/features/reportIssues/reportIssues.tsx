import { Box, Link, Text, VStack } from "@chakra-ui/react"
import { RiExternalLinkLine } from "react-icons/ri"


export const ReportIssues = () => {
  return (
    <VStack padding="2.5rem 5rem">
      <Box>
        <Text as="p" fontSize="5xl" fontWeight="bold" mb={4}>Report or Request</Text>
      </Box>

      <Box>
        <Text as="p" fontSize="lg">Report an issue you are experiencing or request a feature to be added.</Text>
      </Box>

      <Link target="_blank" variant="underline" fontSize="lg" colorPalette="red" href='https://github.com/mpavich2/RaceVision/issues'>
        Continue to Report Here <RiExternalLinkLine />
      </Link>
    </VStack>
  )
}