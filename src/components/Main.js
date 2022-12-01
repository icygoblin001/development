import Poem from "./Poem";

export default function Main(props) {
  const {
    favoriteItems,
    poems,
    onAdd,
    onRemove,
    filterPoems,
    filterBooks,
    filterShort,
    filterLong,
    sort,
    displayAll,
  } = props;

  const getPoems = (sort) => {
    if (sort === "id") {
      poems.sort((book1, book2) => {
        return book1.id - book2.id;
      });
    }
    if (sort === "words") {
      poems.sort((book1, book2) => {
        return book2.words - book1.words;
      });
    }

    return poems.map((poem) => {
      if (displayAll) {
        return (
          <Poem
            key={poem.id}
            poem={poem}
            item={favoriteItems.find((x) => x.id === poem.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Poem>
        );
      }
      if (filterPoems) {
        if (poem.genre == "poem") {
          return (
            <Poem
              key={poem.id}
              poem={poem}
              item={favoriteItems.find((x) => x.id === poem.id)}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Poem>
          );
        }
      }
      if (filterBooks) {
        if (poem.genre == "book") {
          return (
            <Poem
              key={poem.id}
              poem={poem}
              item={favoriteItems.find((x) => x.id === poem.id)}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Poem>
          );
        }
      }
      if (filterShort) {
        if (poem.words > 100) {
          return (
            <Poem
              key={poem.id}
              poem={poem}
              item={favoriteItems.find((x) => x.id === poem.id)}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Poem>
          );
        }
      }
      if (filterLong) {
        if (poem.words <= 100) {
          return (
            <Poem
              key={poem.id}
              poem={poem}
              item={favoriteItems.find((x) => x.id === poem.id)}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Poem>
          );
        }
      }
      // return (
      //   <Poem
      //     key={poem.id}
      //     poem={poem}
      //     item={favoriteItems.find((x) => x.id === poem.id)}
      //     onAdd={onAdd}
      //     onRemove={onRemove}
      //   ></Poem>
      // );
    });
  };

  return (
    <div class="block col-2">
      <h2 class="center">
        <u>Literary Works</u>
      </h2>
      <div className="row">
        {/* map each product to a div */}
        {getPoems(sort)}
      </div>
    </div>
  );
}
