import { Button, HStack, Image, List, ListItem, Skeleton, Stack } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImage from "../services/img-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {

    const { data, isLoading, error } = useGenre();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (error) return null;

    return (
        <List>
            {isLoading &&
                <Stack>
                    {skeletons.map(skeleton => <Skeleton height='40px' key={skeleton} />)}
                </Stack>
            }
            {data.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImage(genre.image_background)} />
                        <Button fontSize='lg' variant={'link'} onClick={() => onSelectedGenre(genre)
                        }>{genre.name}</Button>
                    </HStack>
                </ListItem>)
            }
        </List>
    )
}

export default GenreList