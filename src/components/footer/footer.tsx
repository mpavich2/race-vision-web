import { Box, Container, Link, Stack, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"


export const Footer = () => {
  return (
    <Box bg="#F6F8FA" py={6}>
      <Container maxW="container.lg">
        <Stack direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
          <Text>&copy; {new Date().getFullYear()} Michael Pavich</Text>
          <Stack direction="row">
            <Link href="https://github.com/mpavich2" target="_blank" aria-label="Visit my GitHub profile">
              <FaGithub size="1.5rem" />
            </Link>
            <Link href="https://www.linkedin.com/in/michael-pavich/" target="_blank" aria-label="Visit my LinkedIn profile">
              <FaLinkedin size="1.5rem" />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}