import { useState } from "react";
import Main from "./components/Main";
import Favorites from "./components/Favorites";
import data from "./data";

function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [poemFilter, setPoemFilter] = useState(false);
  const [bookFilter, setBookFilter] = useState(false);
  const [shortFilter, setShortFilter] = useState(false);
  const [longFilter, setLongFilter] = useState(false);
  const [sort, setSort] = useState("id");
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
      <div class="row">
        <div class="block col-2">
          <h1>
            <u>Poems and Book Excerpts</u>
          </h1>
          <h3>
            Browse through this curated selection of literary works and keep
            track of how many words you've read.
            <br />
            <br />
            Filter by genre and passage length; sort by number of words.
            <br />
            <br />
            Click on poem title to view the literary work!
          </h3>
        </div>
        <div class="block col-1">
          <img
            class="mainImg"
            src="https://i.pinimg.com/originals/d0/48/68/d04868235adb286fe2b190a0b436f8f0.jpg"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="block col-2">
          <h3>Filter:</h3>
          <button
            style={{
              background: poemFilter ? "green" : "aliceblue",
            }}
            onClick={() => {
              setPoemFilter(!poemFilter);
            }}
          >
            Poem
          </button>
          <button
            style={{
              background: bookFilter ? "green" : "aliceblue",
            }}
            onClick={() => {
              setBookFilter(!bookFilter);
            }}
          >
            Books
          </button>
          <button
            style={{
              background: shortFilter ? "green" : "aliceblue",
            }}
            onClick={() => {
              setShortFilter(!shortFilter);
            }}
          >
            &#60; 100 words
          </button>
          <button
            style={{
              background: longFilter ? "green" : "aliceblue",
            }}
            onClick={() => {
              setLongFilter(!longFilter);
            }}
          >
            &#8805;100 words
          </button>
        </div>
        <div class="block col-2">
          <h3>Sort:</h3>
          <button
            style={{
              background: sort === "words" ? "green" : "aliceblue",
            }}
            onClick={() => {
              if (sort === "words") {
                setSort("id");
              } else {
                setSort("words");
              }
            }}
          >
            Number of Words
          </button>
        </div>
      </div>

      <div class="row">
        <div class="block col-2">
          <button
            onClick={() => {
              setPoemFilter(false);
              setBookFilter(false);
              setShortFilter(false);
              setLongFilter(false);
              setSort("id");
            }}
            class="reset"
          >
            Reset All Filters
          </button>
        </div>
      </div>

      <div class="row">
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
          filterPoems={poemFilter}
          filterBooks={bookFilter}
          filterShort={shortFilter}
          filterLong={longFilter}
          sort={sort}
        />
      </div>
    </div>
  );
}

export default App;
