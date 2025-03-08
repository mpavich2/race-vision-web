import { InfoSection } from "@/components/sections/common"
import { useBreakpointValue } from "@chakra-ui/react"
import ComingSoonMobileScreenshot from '../../../../../assets/overlays/coming-soon-mobile.webp'
import ComingSoonScreenshot from '../../../../../assets/overlays/coming-soon.webp'

export const FuelCalculatorOverlayFeature = () => {
  const imageSrc = useBreakpointValue({
    base: ComingSoonMobileScreenshot,
    md: ComingSoonScreenshot,
  }) ?? ComingSoonMobileScreenshot
  
  return (
    <InfoSection
      reverse
      imgSrc={imageSrc}
      header="Strategize with the Fuel Calculator"
      description="Accurately plan your fuel strategy with real-time calculations, ensuring you have just the right amount to finish the race strong."
    />
  )
}