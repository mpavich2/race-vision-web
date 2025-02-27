import { Footer } from "@/components/footer"
import { HeroBox } from "@/components/heroBox"
import { Features } from "@/components/sections/features"
import { getLatestRelease } from "@/services/githubReleases"
import { IGithubRelease } from "@/types/githubRelease"
import { useEffect, useState } from "react"

export const HomePage = () => {
  const [lastestRelease, setLatestRelease] = useState<IGithubRelease>()

  useEffect(() => {
    getLatestRelease().then((res) => setLatestRelease(res))
  }, [])

  return (
    <>
      <HeroBox releaseInfo={lastestRelease} />

      <Features />

      <Footer />
    </>
  )
}