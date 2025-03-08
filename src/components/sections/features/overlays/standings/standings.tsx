import { InfoSection } from "@/components/sections/common"
import { useBreakpointValue } from "@chakra-ui/react"
import StandingsMobileScreenshot from '../../../../../assets/overlays/standings-mobile.webp'
import StandingsScreenshot from '../../../../../assets/overlays/standings.webp'

export const StandingsOverlayFeature = () => {
  const imageSrc = useBreakpointValue({
    base: StandingsMobileScreenshot,
    md: StandingsScreenshot,
  }) ?? StandingsMobileScreenshot
  
  return (
    <InfoSection
      reverse
      imgSrc={imageSrc}
      header="View Race Standings"
      description="Effortlessly view real-time race positions and standings. Stay informed about your on-track position relative to other drivers, with full multiclass support."
    />
  )
}