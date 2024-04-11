export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> start adding some itesm to your packig list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100 || 0);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! ready to go "
          : `💼 You have ${numItems} items in your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
