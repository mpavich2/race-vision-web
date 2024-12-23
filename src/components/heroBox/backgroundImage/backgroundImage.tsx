import { Box } from "@chakra-ui/react"
import Background from '../../../assets/iracing-screenshot.jpg'

export const BackgroundImage = () => {
  return (
    <Box
      bgImage={`linear-gradient(to bottom, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 1) 100%), url(${Background})`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      width="100%"
      height="100%"
      filter="auto"
      blur="3px"
      maxH="1440px"
    />
  )
}