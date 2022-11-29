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
  } = props;
  return (
    <div class="block col-2">
      <h2 class="center">
        <u>Literary Works</u>
      </h2>
      <div className="row">
        {/* map each product to a div */}
        {poems.map((poem) => {
          if (filterPoems) {
            if (poem.genre != "poem") {
              return;
            }
          }
          if (filterBooks) {
            if (poem.genre != "book") {
              return;
            }
          }
          if (filterShort) {
            if (poem.words > 100) {
              return;
            }
          }
          if (filterLong) {
            if (poem.words <= 100) {
              return;
            }
          }
          return (
            <Poem
              key={poem.id}
              poem={poem}
              item={favoriteItems.find((x) => x.id === poem.id)}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Poem>
          );
        })}
      </div>
    </div>
  );
}
