import { Box, Flex, Image, Text } from "@chakra-ui/react"

export const InfoSection = (props: {
  header: string
  description: string
  imgSrc: string
  reverse?: boolean
}) => {
  const rowDirection = props.reverse ? 'row-reverse' : 'row'
  const justifyContent = props.reverse ? 'start' : 'end'

  return (
    <Flex
      direction={{ base: 'column', md: rowDirection }}
      align="center"
      justify="space-between"
      padding="2.5rem 5rem"
      gap={{ base: '1.5rem', md: '0' }}
    >
      <Box flex="4">
        <Text fontSize="5xl" fontWeight="bold" mb={4}>
          {props.header}
        </Text>
        <Text fontSize="lg">
          {props.description}
        </Text>
      </Box>
  
      <Box flex="6" display="flex" alignItems="center" justifyContent={{ base: 'center', md: justifyContent }}>
        <Image
          src={props.imgSrc} 
          alt="Overlay Feature Screenshot"
          borderRadius="md"
          boxSize={{ base: '100%', md: '80%' }}
          objectFit="contain"
          loading="lazy"
        />
      </Box>
    </Flex>
  )
}