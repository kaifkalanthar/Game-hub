import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImage from '../services/img-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={getCroppedImage(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justify='space-between' paddingY={1}>
                    <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore criticScore={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard