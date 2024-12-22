import { Flex, Text } from "@chakra-ui/react"
import { Logo } from "../logo"

export const UnderConstruction = () => {
  return (
    <Flex direction="column" align="center" justify="center" margin="auto" height="100%">
      <Logo autoHeight />
      <Text>Website and App are still under construction</Text>
    </Flex>
  )
}