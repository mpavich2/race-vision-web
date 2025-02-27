import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import F1Wheel from '../assets/f1-wheel.webp'


export const PageNotFound = () => {
  return (
    <>
      <Flex width="100%" height="100%" justifyContent="center" alignItems="center" flexDir="column" gap="2rem">
        <Flex justifyContent="center" alignItems="center">
          <Heading as="h1" fontSize="10rem">4</Heading>
          <Image
            src={F1Wheel} 
            alt="f1-wheel"
            h="10rem"
            w="10rem"
          />
          <Heading as="h1" fontSize="10rem">4</Heading>
        </Flex>

        <Flex flexDir="column">
          <Heading as="h2" size="3xl">No Content Found</Heading>
          <Text as="p">Unfortunately there is no content available at this address.</Text>
        </Flex>

        <Link to="/">
          <Button>Go to Homepage</Button>
        </Link>
      </Flex>
    </>
  )
}