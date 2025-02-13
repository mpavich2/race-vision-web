import { Box, Image } from "@chakra-ui/react"
import OverviewImage from '../../../../assets/overlays-overview.webp'

export const Overview = () => {
  return (
    <Box padding="2.5rem 5rem" display="flex" alignItems="center" justifyContent="center">
      <Image
        src={OverviewImage}
        alt="Overview Feature Screenshot"
        borderRadius="md"
        boxSize="100%"
        objectFit="cover"
        loading="lazy"
      />
    </Box>
  )
}