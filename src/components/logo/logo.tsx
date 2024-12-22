import { Image } from "@chakra-ui/react"
import LogoSvg from '../../assets/logo.svg'
import RedLogoSvg from '../../assets/logo_red.svg'

export const Logo = (props: {
  isRed?: boolean
  autoHeight?: boolean
}) => {

  const imageSrc = props.isRed ? RedLogoSvg : LogoSvg
  const height = props.autoHeight ? 'auto' : '15rem'

  return <Image src={imageSrc} height="auto" width={height} />
}