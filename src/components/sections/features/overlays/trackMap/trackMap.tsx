import { InfoSection } from "@/components/sections/common"
import RelativeScreenshot from '../../../../../assets/coming-soon.webp'

export const TrackMapOverlayFeature = () => {
  return (
    <InfoSection
      imgSrc={RelativeScreenshot}
      header="Navigate with the Track Map"
      description="Stay oriented with a live track map showing your position, upcoming turns, and the locations of other drivers for better situational awareness."
    />
  )
}