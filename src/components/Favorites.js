export default function Favorites(props) {
  const { favoriteItems, setPoemFilter, setBookFilter, setShortFilter } = props;
  const itemsWords = favoriteItems.reduce((a, c) => a + c.qty * c.words, 0);

  return (
    <aside className="block col-1">
      <div class="row">
        {/* <button onClick={() => onReset()}>Reset</button> */}
        <button
          onClick={() => {
            setPoemFilter(false);
            setBookFilter(false);
            setShortFilter(false);
          }}
        >
          Reset Filters
        </button>
      </div>
      <h2 class="center">
        <u>Favorited Works</u>
      </h2>
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
            <div class="row">
              <div class="col-2">
                <strong>Total Words Read</strong>
              </div>
              {/* reference items words calculated in beginning */}
              <div class="col-1 tex-right">
                <strong>{itemsWords} words</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
