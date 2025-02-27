import { IGithubRelease } from "@/types/githubRelease"

export const getLatestRelease = async (): Promise<IGithubRelease> => {
  const response = await fetch('https://api.github.com/repos/mpavich2/RaceVision/releases/latest')

  const data = await response.json()

  const releaseExeLocation = data.assets.find((asset: { name: string }) => asset.name.endsWith('.exe'))

  return {
    downloadUrl: releaseExeLocation.browser_download_url,
    version: data.tag_name
  }
}