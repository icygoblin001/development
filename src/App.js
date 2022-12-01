import { useState } from "react";
import Main from "./components/Main";
import Favorites from "./components/Favorites";
import data from "./data";

function App() {
  // const [displayAll, setDisplayAll] = useState(true);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [poemFilter, setPoemFilter] = useState(true);
  const [bookFilter, setBookFilter] = useState(true);
  const [shortFilter, setShortFilter] = useState(true);
  const [longFilter, setLongFilter] = useState(true);
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
            track of how many words are in your favorited list.
            <br />
            <br />
            Filter by genre and passage length; sort by number of words in
            descending order. i.e. Showing "Poem" and "&#60;100 words" will
            display all poems AND all works with fewer than 100 words (including
            book excerpts).
            <br />
            <br />
            Clicking on poem title or image will redirect you to view the
            literary work!
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
          <h3>Show (Filter By):</h3>
          <button
            style={{
              background: poemFilter ? "#AFE1AF" : "aliceblue",
            }}
            onClick={() => {
              setPoemFilter(!poemFilter);
              // setDisplayAll(false);
            }}
          >
            Show Poems
          </button>
          <button
            style={{
              background: bookFilter ? "#AFE1AF" : "aliceblue",
            }}
            onClick={() => {
              setBookFilter(!bookFilter);
              // setDisplayAll(false);
            }}
          >
            Show Books
          </button>
          <button
            style={{
              background: shortFilter ? "#AFE1AF" : "aliceblue",
            }}
            onClick={() => {
              setShortFilter(!shortFilter);
              // setDisplayAll(false);
            }}
          >
            Show &#8805; 100 words
          </button>
          <button
            style={{
              background: longFilter ? "#AFE1AF" : "aliceblue",
            }}
            onClick={() => {
              setLongFilter(!longFilter);
              // setDisplayAll(false);
            }}
          >
            Show &#60;100 words
          </button>
        </div>
        <div class="block col-2">
          <h3>Sort:</h3>
          <button
            style={{
              background: sort === "words" ? "#AFE1AF" : "aliceblue",
            }}
            onClick={() => {
              if (sort === "words") {
                setSort("id");
              } else {
                setSort("words");
              }
            }}
          >
            Number of Words (Descending)
          </button>
        </div>
        <div class="block col-2">
          <h3>Reset:</h3>
          <button
            onClick={() => {
              setPoemFilter(true);
              setBookFilter(true);
              setShortFilter(true);
              setLongFilter(true);
              // setDisplayAll(true);
            }}
          >
            Display All
          </button>
          <button
            onClick={() => {
              setSort("id");
            }}
          >
            Remove Sort
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
          // displayAll={displayAll}
        />
      </div>
    </div>
  );
}

export default App;
