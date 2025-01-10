import { InfoSection } from "@/components/sections/common"
import RelativeScreenshot from '../../../../../assets/input-graph-overlay.png'

export const InputGraphOverlayFeature = () => {
  return (
    <InfoSection
      imgSrc={RelativeScreenshot}
      header="Analyze Input Graph"
      description="Visualize your throttle and brake inputs in real-time with a clear and intuitive graph. Perfect for analyzing your driving performance and finding areas to improve."
    />
  )
}