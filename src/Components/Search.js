const Search = ({ task, setTask, search, setSearch }) => {
  // Declaration functions used in the return
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newTaskTab = [...task];
    newTaskTab.push({ name: search, isValid: true });
    setTask(newTaskTab);
    setSearch("");
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={search}
        onChange={handleOnChange}
      />
      <input
        type="submit"
        value="Add task"
        disabled={!search || task.length >= 14}
        className={(!search || task.length >= 14) && "disabled"}
      />

      {task.length >= 14 && (
        <p>Sorry, you've reached the maximum number of tasks !</p>
      )}
    </form>
  );
};

export default Search;
