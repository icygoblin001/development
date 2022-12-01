export default function Favorites(props) {
  const { favoriteItems } = props;
  const itemsWords = favoriteItems.reduce((a, c) => a + c.words, 0);

  return (
    <aside className="block col-1">
      <h2 class="center">
        <u>Favorited Works</u>
      </h2>
      <div>
        {favoriteItems.length === 0 && (
          <div class="center">Add something to your favorites list!</div>
        )}
        {/* map each item to a div, render a row for each item */}
        {favoriteItems.map((item) => (
          <div key={item.id} class="row cartItems">
            <div class="col-2">{item.name}</div>
            <div class="col-1 text-right">{item.words} words</div>
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
              <div class="col-1 text-right">
                <strong>{itemsWords} words</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
