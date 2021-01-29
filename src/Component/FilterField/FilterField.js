export default function FilterField({ updateFilter }) {
  const handleFilter = e => {
    updateFilter(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={handleFilter} />
    </div>
  );
}
