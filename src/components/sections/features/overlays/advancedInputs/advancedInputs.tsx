import { InfoSection } from "@/components/sections/common"
import RelativeScreenshot from '../../../../../assets/inputs-overlay.png'

export const AdvancedInputsOverlayFeature = () => {
  return (
    <InfoSection
      reverse
      imgSrc={RelativeScreenshot}
      header="Monitor Advanced Inputs"
      description="Track key performance details like gear selection, speed, RPM, shift lights, and race position in one intuitive display, giving you the insights needed to stay ahead on track."
    />
  )
}