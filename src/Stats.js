export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to you packing list</em>
      </p>
    );
  // console.log(itemsLength);
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const numPercen = Math.floor((numPacked / numItems) * 100);

  // console.log(Math.trunc(numPercen,));
  return (
    <footer className="stats">
      <em>
        {numPercen === 100
          ? "You've got everthing! Ready to go ✈️"
          : `You have ${numItems} items on you list, and already packed ${numPacked} (
        ${numPercen ? numPercen : 0}%)`}
      </em>
    </footer>
  );
}
