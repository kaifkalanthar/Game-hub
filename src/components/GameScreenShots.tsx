import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";
import PictureSkeleton from "./PictureSkeleton";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (isLoading)
    return (
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
        {skeletons.map((skeleton) => (
          <PictureSkeleton key={skeleton} />
        ))}
      </SimpleGrid>
    );
  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
        {data?.results.map((res) => (
          <Image src={res.image} key={res.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShots;
