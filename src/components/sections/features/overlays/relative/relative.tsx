import { InfoSection } from '@/components/sections/common'
import { useScrollContext } from '@/context/scrollContext'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import RelativeMobileScreenshot from '../../../../../assets/overlays/relative-mobile.webp'
import RelativeScreenshot from '../../../../../assets/overlays/relative.webp'

export const RelativeOverlayFeature = () => {
  // This will always be the first feature below the hero so setting scroll context ref here
  const { scrollRef } = useScrollContext()

  const imageSrc = useBreakpointValue(
    {
      base: RelativeMobileScreenshot,
      md: RelativeScreenshot,
    }
  ) ?? RelativeMobileScreenshot

  return (
    <Box ref={scrollRef}>
      <InfoSection
        imgSrc={imageSrc}
        header="See Relative Drivers"
        description="Quickly spot nearby drivers on track, compare your performance, and access important info about your surroundings in real-time."
      />
    </Box>
  )
}