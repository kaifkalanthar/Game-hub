import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import { Link } from "react-router-dom";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/img-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justify="space-between" paddingY={1} marginBottom={3}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`games/${game.slug}`}>
            {game.name} <Emoji rating={game.rating_top} />
          </Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
