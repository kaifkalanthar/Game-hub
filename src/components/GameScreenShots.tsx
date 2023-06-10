import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
      {data?.results.map((res) => (
        <Image src={res.image} key={res.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
