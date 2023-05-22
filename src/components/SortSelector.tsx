import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    sortOrder: string;
    onSelectedSortOrder: (sortOrder: string) => void;
}
const SortSelector = ({ sortOrder, onSelectedSortOrder }: Props) => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Data added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(sort =>
                    <MenuItem
                        key={sort.value}
                        value={sort.value}
                        onClick={() => onSelectedSortOrder(sort.value)}>
                        {sort.label}
                    </MenuItem>)
                }
            </MenuList>
        </Menu>
    )
}

export default SortSelector