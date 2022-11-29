import React from "react";
export default function Poem(props) {
  const { item, poem, onAdd, onRemove } = props;
  return (
    <div class="card center">
      <div class="fav">
        {/* show minus or plus */}
        {item ? (
          <div>
            <button onClick={() => onRemove(item)} class="update">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => onAdd(item)} class="update">
              +
            </button>
          </div>
        ) : (
          <button onClick={() => onAdd(poem)} class="noborder">
            Favorite
          </button>
        )}
      </div>
      <a href={poem.link}>
        <img class="poemImage" src={poem.image} alt={poem.name} />
      </a>
      <div>
        <u>
          <a href={poem.link}>{poem.name}</a>
        </u>
      </div>
      <div>by: {poem.author}</div>
      <div>genre: {poem.genre}</div>
      <div>words: {poem.words}</div>
    </div>
  );
}
