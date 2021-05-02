const Search = ({ task, setTask, search, setSearch }) => {
  // When click on add task, new task added with the value of what is written in the input
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newTaskTab = [...task];
    // Add task with the 1st letter uppercase
    const taskName = search.charAt(0).toUpperCase() + search.slice(1);
    newTaskTab.push({ name: taskName, isValid: true });
    setTask(newTaskTab);
    setSearch("");
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
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
      </div>
      {task.length >= 14 && (
        <p>Sorry, you've reached the maximum number of tasks !</p>
      )}
    </form>
  );
};

export default Search;
