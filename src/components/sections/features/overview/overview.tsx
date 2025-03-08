import { Box, Image, useBreakpointValue } from "@chakra-ui/react"
import OverviewMobileScreenshot from '../../../../assets/overlays/overview-mobile.webp'
import OverviewScreenshot from '../../../../assets/overlays/overview.webp'

export const Overview = () => {
  const imageSrc = useBreakpointValue({
    base: OverviewMobileScreenshot,
    md: OverviewScreenshot,
  }) ?? OverviewMobileScreenshot
  
  return (
    <Box padding="2.5rem 5rem" display="flex" alignItems="center" justifyContent="center">
      <Image
        src={imageSrc}
        alt="Overview Feature Screenshot"
        borderRadius="md"
        boxSize="100%"
        objectFit="cover"
        loading="lazy"
      />
    </Box>
  )
}