import Poem from "./Poem";

export default function Main(props) {
  const { favoriteItems, poems, onAdd, onRemove } = props;
  return (
    <div className="block col-2">
      <h2 class="center">Poems</h2>
      <div className="row">
        {/* map each product to a div */}
        {poems.map((poem) => (
          // specify key as poem id to resolve errors
          <Poem
            key={poem.id}
            poem={poem}
            item={favoriteItems.find((x) => x.id === poem.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Poem>
        ))}
      </div>
    </div>
  );
}
