import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaScore">
        <CriticScore criticScore={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        {game.publishers.map((publish) => (
          <Text key={publish.id}>{publish.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
