export default function Favorites(props) {
  const { favoriteItems, onAdd, onRemove } = props;
  const itemsWords = favoriteItems.reduce((a, c) => a + c.qty * c.words, 0);
  return (
    <aside className="block col-1">
      <h2 class="center">Favorited Works</h2>
      <div>
        {favoriteItems.length === 0 && (
          <div class="center">Add a poem to your favorites list!</div>
        )}
        {/* map each item to a div, render a row for each item */}
        {favoriteItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-1 tex-right">
              {item.words} words x {item.qty} read(s)
            </div>
          </div>
        ))}

        {favoriteItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">
                <strong>Total Words Read</strong>
              </div>
              {/* reference items words calculated in beginning */}
              <div className="col-1 tex-right">
                <strong>{itemsWords} words</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
