import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/usePlatform'

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatformId?: number ;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatform();
    const selectedPlatform = data?.results.find(d => d.id === selectedPlatformId);

    if (error) return null;
    return (
        <Menu>
            <MenuButton 
            as={Button} 
            rightIcon={<BsChevronDown />} 
            key={selectedPlatform?.id}>{selectedPlatform
                 ? selectedPlatform?.name : 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => 
                <MenuItem 
                key={platform.id} 
                onClick={() => onSelectedPlatform(platform)}>
                    {platform.name}
                </MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector