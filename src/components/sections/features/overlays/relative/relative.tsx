import { InfoSection } from '@/components/sections/common'
import { useScrollContext } from '@/context/scrollContext'
import { Box } from '@chakra-ui/react'
import RelativeScreenshot from '../../../../../assets/relative-overlay.webp'

export const RelativeOverlayFeature = () => {
  // This will always be the first feature below the hero so setting scroll context ref here
  const { scrollRef } = useScrollContext()

  return (
    <Box ref={scrollRef}>
      <InfoSection
        imgSrc={RelativeScreenshot}
        header="See Relative Drivers"
        description="Quickly spot nearby drivers on track, compare your performance, and access important info about your surroundings in real-time."
      />
    </Box>
  )
}