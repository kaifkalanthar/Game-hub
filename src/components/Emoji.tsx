import { Image, ImageProps } from '@chakra-ui/react'
import meh from '../assets/meh.webp';
import bullsEye from '../assets/bulls-eye.webp';
import ThumpsUp from '../assets/thumbs-up.webp'
interface Props {
    rating: number;
}
const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;
    const emoji: { [key: number]: ImageProps } = {
        3: { src: meh, boxSize: '25px', alt: 'meh' },
        4: { src: ThumpsUp, boxSize: '25px', alt: 'thumpsup' },
        5: { src: bullsEye, boxSize: '25px', alt: 'bullseye' }
    }
    return (
        <Image {...emoji[rating]} marginTop={1} />
    )
}

export default Emoji