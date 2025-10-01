import { Image, type ImageProps } from '@chakra-ui/react'
import bullseye from '../assets/bullseye.png'
import thumbsUp from '../assets/like.png'
import meh from '../assets/meh.png'

interface Props {
  rating: number
}

const Emoji = ({rating} : Props) => {
    if(rating < 3) return null

    const emojiMap: {[key: number] :  ImageProps} = {
      3: {src: meh , alt: 'meh'},
      4: {src: thumbsUp , alt: 'recommended'},
      5: {src: bullseye , alt: 'exceptional'}
    }

  return (
    <Image {...emojiMap[rating]} boxSize="25px" marginTop={1}/>
  )
}

export default Emoji