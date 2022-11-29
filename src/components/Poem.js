export default function Poem(props) {
  const { item, poem, onAdd, onRemove } = props;
  return (
    <div className="card">
      <img className="small" src={poem.image} alt={poem.name} />
      <div>
        <u>
          <a href={poem.link}>{poem.name}</a>
        </u>
      </div>
      <div>by {poem.author}</div>
      <div>Genre: {poem.genre}</div>
      <div>{poem.words} Words</div>
      <div class="center">
        {/* show minus or plus */}
        {item ? (
          <div>
            <button onClick={() => onRemove(item)} className="update">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => onAdd(item)} className="update">
              +
            </button>
          </div>
        ) : (
          <button onClick={() => onAdd(poem)}>Favorite</button>
        )}
      </div>
    </div>
  );
}
