import { useScrollContext } from "@/context/scrollContext"
import { Text, VStack } from "@chakra-ui/react"
import { RiArrowDownWideLine } from "react-icons/ri"

export const LearnMoreButton = () => {
  const { scrollRef } = useScrollContext()

  const scrollToContent = () => {
    if (!scrollRef.current) {
      console.log('not defined')
    }
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <VStack onClick={scrollToContent} cursor="pointer">
      <Text textStyle="xl">Learn More</Text>
      <RiArrowDownWideLine />
    </VStack>
  )
}