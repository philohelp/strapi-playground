import React from "react";

export default function Column({ items, name }) {
  return (
    <div>
      <p>{name}</p>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
