import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImage from '../services/img-url'
import Emoji from './Emoji'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImage(game.background_image)} />
            <CardBody>
                <HStack justify='space-between' paddingY={1} marginBottom={3}>
                    <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore criticScore={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard