import { InfoSection } from "@/components/sections/common"
import RelativeScreenshot from '../../../../../assets/standings-overlay.webp'

export const StandingsOverlayFeature = () => {
  return (
    <InfoSection
      reverse
      imgSrc={RelativeScreenshot}
      header="View Race Standings"
      description="Effortlessly view real-time race positions and standings. Stay informed about your on-track position relative to other drivers, with full multiclass support."
    />
  )
}