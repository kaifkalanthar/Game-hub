import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    
    const platform = usePlatform(gameQuery.genreId);
    const genre = useGenre(gameQuery.platformId);
    const heading = `${platform?.name || ''} 
    ${genre?.name || ''} Games`;
    return (
        <Heading marginY={5} as={'h1'}>{heading}</Heading>
    )
}

export default GameHeading