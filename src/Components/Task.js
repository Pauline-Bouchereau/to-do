//Import Icons from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ index, elem, task, setTask }) => {
  // When checkbox is clicked --> task gets crossed or uncrossed, crossed tasks go to the end of the list
  const handleOnClickCheckBox = () => {
    const newTaskTab = [...task];
    const indexTask = newTaskTab.indexOf(elem);
    if (newTaskTab[index].isValid === true) {
      newTaskTab.splice(indexTask, 1);
      elem.isValid = false;
      newTaskTab.push(elem);
    } else if (newTaskTab[index].isValid === false) {
      newTaskTab.splice(indexTask, 1);
      elem.isValid = true;
      newTaskTab.unshift(elem);
    }
    setTask(newTaskTab);
  };

  // When ! is clicked, the task is set as "important" and goes to the top of the list
  const handleClickImportant = () => {
    const newTaskTab = [...task];
    const indexTask = newTaskTab.indexOf(elem);
    if (newTaskTab[index].isImportant === true) {
      console.log("test important true");
      newTaskTab.splice(indexTask, 1);
      elem.isImportant = false;
      newTaskTab.push(elem);
      console.log(elem);
    } else if (newTaskTab[index].isImportant === false) {
      console.log("test important false");
      newTaskTab.splice(indexTask, 1);
      elem.isImportant = true;
      newTaskTab.unshift(elem);
      console.log(elem);
    }
    setTask(newTaskTab);
  };

  // When trash icon is clicked --> task deleted
  const handleOnClickTrash = () => {
    const newTaskTab = [...task];
    const indexTask = newTaskTab.indexOf(elem);
    newTaskTab.splice(indexTask, 1);
    setTask(newTaskTab);
  };

  return (
    <div className={task[index].isImportant ? "task important" : "task"}>
      <div onClick={handleOnClickCheckBox}>
        {task[index].isValid ? (
          <FontAwesomeIcon
            icon="square"
            color="#2d2f30"
            className="icon-checkbox"
          />
        ) : (
          <FontAwesomeIcon
            icon="check-square"
            color="#2d2f30"
            className="icon-checkbox"
          />
        )}
        <p className={!task[index].isValid ? "crossed" : ""}>{elem.name}</p>
      </div>
      <span onClick={handleClickImportant}>
        <FontAwesomeIcon icon="exclamation-circle" />
      </span>
      <span onClick={handleOnClickTrash}>
        <FontAwesomeIcon icon="trash-alt" />
      </span>
    </div>
  );
};

export default Task;
