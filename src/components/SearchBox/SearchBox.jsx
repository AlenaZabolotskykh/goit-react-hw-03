export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <label htmlFor="username">Find contactc by name</label>
      <input
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        type="text"
        id="username"
      />
    </>
  );
}
