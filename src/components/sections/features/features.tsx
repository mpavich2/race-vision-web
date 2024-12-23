import { VStack } from "@chakra-ui/react"
import { AdvancedInputsOverlayFeature } from "./overlays/advancedInputs"
import { FuelCalculatorOverlayFeature } from "./overlays/fuelCalculator"
import { InputGraphOverlayFeature } from "./overlays/inputGraph"
import { RelativeOverlayFeature } from "./overlays/relative"
import { StandingsOverlayFeature } from "./overlays/standings"
import { TrackMapOverlayFeature } from "./overlays/trackMap"
import { Overview } from "./overview"
import { ReportIssues } from "./reportIssues"

export const Features = () => {

  return (
    <VStack>
      <RelativeOverlayFeature />
      <StandingsOverlayFeature />
      <InputGraphOverlayFeature />
      <AdvancedInputsOverlayFeature />
      <TrackMapOverlayFeature />
      <FuelCalculatorOverlayFeature />

      <Overview />

      <ReportIssues />
    </VStack>
  )
}