export default function Header(props) {
  const { countFavoriteItems } = props;
  return (
    <div className="row center block">
      <div>
        <a href="#/">
          <h2>Not GoodReads</h2>
          <p>Browse and save your favorite poems</p>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Favorites
          {/* if number of items is not zero, show a badge of how many there are */}
          {countFavoriteItems ? (
            <button className="badge">{countFavoriteItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">Sign In</a>
      </div>
    </div>
  );
}
