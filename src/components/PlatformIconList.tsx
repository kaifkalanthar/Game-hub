import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons";
import Platform from "../entities/Platform";


interface Props {
    platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack>
            {platform.map(platform => <Icon color={'gray.500'} margin={1} as={iconMap[platform.slug]} key={platform.id} />)}
        </HStack>
    )
}

export default PlatformIconList