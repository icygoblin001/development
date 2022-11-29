export default function Header(props) {
  const { countFavoriteItems } = props;
  return (
    <div className="row center block">
      <div>
        <h1 class="center">Poem Reader</h1>
        <h3 class="center">
          Browse through this curated selection of literary works and keep track
          of how many words you've read.
          <br></br>
          Filter by author and genre, and sort by number of words.
        </h3>
      </div>
    </div>
  );
}
