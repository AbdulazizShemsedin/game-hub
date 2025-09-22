import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";

function App() {

  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,              // no aside area at all on base
        lg: `"nav nav" "aside main"`,      // add aside on lg
      }}
      templateColumns={{
        base: "1fr",                       // one column on mobile
        lg: "200px 1fr",                   // sidebar width + main on lg
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Sidebar only on lg and up */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
