import { InfoSection } from "@/components/sections/common"
import { useBreakpointValue } from "@chakra-ui/react"
import TrackMapMobileScreenshot from '../../../../../assets/overlays/track-map-mobile.webp'
import TrackMapScreenshot from '../../../../../assets/overlays/track-map.webp'

export const TrackMapOverlayFeature = () => {
  const imageSrc = useBreakpointValue({
    base: TrackMapMobileScreenshot,
    md: TrackMapScreenshot,
  }) ?? TrackMapMobileScreenshot
  
  return (
    <InfoSection
      imgSrc={imageSrc}
      header="Navigate with the Track Map"
      description="Stay oriented with a live track map showing your position, upcoming turns, and the locations of other drivers for better situational awareness."
    />
  )
}