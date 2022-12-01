import React from "react";
export default function Poem(props) {
  const { item, poem, onAdd, onRemove } = props;
  return (
    <div class="card center">
      <div>
        {/* show minus or plus */}
        {item ? (
          <div>
            <button onClick={() => onRemove(item)} class="update">
              Remove
            </button>
          </div>
        ) : (
          <button onClick={() => onAdd(poem)} class="noborder">
            <img
              src={
                "data:image/png;base64,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"
              }
              alt="image"
              class="fav"
            />
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
