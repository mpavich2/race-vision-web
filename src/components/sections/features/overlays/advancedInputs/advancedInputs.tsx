import { InfoSection } from "@/components/sections/common"
import { useBreakpointValue } from "@chakra-ui/react"
import InputsMobileScreenshot from '../../../../../assets/overlays/inputs-mobile.webp'
import InputsScreenshot from '../../../../../assets/overlays/inputs.webp'

export const AdvancedInputsOverlayFeature = () => {
  const imageSrc = useBreakpointValue({
    base: InputsMobileScreenshot,
    md: InputsScreenshot,
  }) ?? InputsMobileScreenshot
  
  return (
    <InfoSection
      reverse
      imgSrc={imageSrc}
      header="Monitor Advanced Inputs"
      description="Track key performance details like gear selection, speed, RPM, shift lights, and race position in one intuitive display, giving you the insights needed to stay ahead on track."
    />
  )
}