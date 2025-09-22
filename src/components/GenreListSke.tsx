import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSke = () => {
  return (
    <List>
      <Skeleton boxSize="22px" height="50px" />
      <ListItem>
        <SkeletonText/>
      </ListItem>
    </List>
  );
};

export default GenreListSke;
