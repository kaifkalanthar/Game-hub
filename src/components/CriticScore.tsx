import { Badge } from '@chakra-ui/react'


interface Props {
    criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
    const color = criticScore > 75 ? 'green' : criticScore > 60 ? 'yellow' : '';
    return (
        <Badge colorScheme={color} paddingX={2} borderRadius={'4px'}>{criticScore}</Badge>
    )
}

export default CriticScore