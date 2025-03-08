import { InfoSection } from "@/components/sections/common"
import { useBreakpointValue } from "@chakra-ui/react"
import InputGraphMobileScreenshot from '../../../../../assets/overlays/input-graph-mobile.webp'
import InputGraphScreenshot from '../../../../../assets/overlays/input-graph.webp'


export const InputGraphOverlayFeature = () => {
  const imageSrc = useBreakpointValue({
    base: InputGraphMobileScreenshot,
    md: InputGraphScreenshot,
  }) ?? InputGraphMobileScreenshot
  
  return (
    <InfoSection
      imgSrc={imageSrc}
      header="Analyze Input Graph"
      description="Visualize your throttle and brake inputs in real-time with a clear and intuitive graph. Perfect for analyzing your driving performance and finding areas to improve."
    />
  )
}