import { InfoSection } from "@/components/sections/common"
import RelativeScreenshot from '../../../../../assets/overlay-screenshot.webp'

export const FuelCalculatorOverlayFeature = () => {
  return (
    <InfoSection
      reverse
      imgSrc={RelativeScreenshot}
      header="Strategize with the Fuel Calculator"
      description="Accurately plan your fuel strategy with real-time calculations, ensuring you have just the right amount to finish the race strong."
    />
  )
}