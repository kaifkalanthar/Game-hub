import { Button, HStack, Heading, Image, List, ListItem, Skeleton, Stack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/img-url";
import useGameQueryStore from "../services/GameStore";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        {" "}
        Genre
      </Heading>
      <List>
        {isLoading && (
          <Stack>
            {skeletons.map((skeleton) => (
              <Skeleton height="40px" key={skeleton} />
            ))}
          </Stack>
        )}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                variant={"link"}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList