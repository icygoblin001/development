export default function Favorites(props) {
  const { favoriteItems, onAdd, onRemove } = props;
  const itemsWords = favoriteItems.reduce((a, c) => a + c.qty * c.words, 0);
  return (
    <aside className="block col-1">
      <h2 class="center">Favorite Items</h2>
      <div>
        {favoriteItems.length === 0 && (
          <div class="center">Add a poem to your favorites list!</div>
        )}
        {/* map each item to a div, render a row for each item */}
        {favoriteItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-1">{item.name}</div>
            <div className="col-1">
              <button onClick={() => onRemove(item)} className="update">
                -
              </button>
              <button onClick={() => onAdd(item)} className="update">
                +
              </button>
            </div>
            <div className="col-1 tex-right">
              {item.qty} x {item.words}
            </div>
          </div>
        ))}

        {favoriteItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">
                <strong>Items Words</strong>
              </div>
              {/* reference items words calculated in beginning */}
              <div className="col-1 tex-right">
                <strong>{itemsWords}</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
