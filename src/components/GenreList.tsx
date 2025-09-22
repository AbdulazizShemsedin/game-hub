import { HStack, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenre, { type Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSke from "./GenreListSke";

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre} : Props) => {
  const { data, isLoading, error } = useGenre();
  const skeletonsGenre = [1, 2, 3, 4, 5, 6];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletonsGenre.map((skeletonsGenre) => (
          <GenreListSke key={skeletonsGenre} />
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="sm"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
