import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { type Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSke from "./GenreListSke";

const GenreList = () => {
  const { data, isLoading , error } = useGenre();
  const skeletonsGenre = [1, 2, 3, 4, 5, 6];

  if (error) return null
  
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
