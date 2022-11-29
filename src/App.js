import { useState } from "react";
import Main from "./components/Main";
import Favorites from "./components/Favorites";
import data from "./data";

function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const { poems } = data;

  // add poem to favorite items
  const onAdd = (poem) => {
    // search favoriteItems to find poem associated with onAdd button
    const exist = favoriteItems.find((x) => x.id === poem.id);
    // if exists, change quantity by one
    if (exist) {
      // goes through entire favoriteItems list, but only updates the one that matches
      // our id
      const newFavoriteItem = favoriteItems.map((x) =>
        x.id === poem.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setFavoriteItems(newFavoriteItem);
    } else {
      // if poem does not exist, need to add it to cart
      const newFavoriteItem = [...favoriteItems, { ...poem, qty: 1 }];
      setFavoriteItems(newFavoriteItem);
    }
  };
  const onRemove = (poem) => {
    // find the right product and save it
    const exist = favoriteItems.find((x) => x.id === poem.id);
    if (exist.qty === 1) {
      // use filter to remove the item entirely from favorites
      const newFavoriteItem = favoriteItems.filter((x) => x.id !== poem.id);
      setFavoriteItems(newFavoriteItem);
    } else {
      // decrease quantity by one, but keep it in favorites list
      const newFavoriteItem = favoriteItems.map((x) =>
        // go through entire list
        x.id === poem.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setFavoriteItems(newFavoriteItem);
    }
  };
  return (
    <div>
      <div>
        <h1 class="center">Poems and Excerpts</h1>
        <h3 class="center">
          Browse through this curated selection of literary works and keep track
          of how many words you've read.
          <br></br>
          Filter by author and genre, and sort by number of words.
        </h3>
      </div>

      <div className="row">
        {/* we pass into Main component, becasue we need to interact
        with the poem component used within it */}
        <Favorites
          favoriteItems={favoriteItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <Main
          favoriteItems={favoriteItems}
          onAdd={onAdd}
          onRemove={onRemove}
          poems={poems}
        />
      </div>
    </div>
  );
}

export default App;
