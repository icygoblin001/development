export default function Poem(props) {
  const { item, poem, onAdd, onRemove } = props;
  return (
    <div className="card">
      <img className="small" src={poem.image} alt={poem.name} />
      <h3>{poem.name}</h3>
      <div>by {poem.author}</div>
      <div>{poem.words} Words</div>
      <div>
        {/* show minus or plus */}
        {item ? (
          <div>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>
        ) : (
          <button onClick={() => onAdd(poem)}>Add To Favorites</button>
        )}
      </div>
    </div>
  );
}
