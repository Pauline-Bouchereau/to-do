//Import Icons from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ index, elem, task, setTask }) => {
  // When checkbox is clicked --> task gets crossed or uncrossed, crossed tasks go to the end of the list
  const handleOnClickCheckBox = () => {
    const newTaskTab = [...task];
    const indexTask = newTaskTab.indexOf(elem);
    if (
      newTaskTab[index].name === elem.name &&
      newTaskTab[index].isValid === true
    ) {
      newTaskTab.splice(indexTask, 1);
      elem.isValid = false;
      newTaskTab.push(elem);
    } else if (
      newTaskTab[index].name === elem.name &&
      newTaskTab[index].isValid === false
    ) {
      newTaskTab.splice(indexTask, 1);
      elem.isValid = true;
      newTaskTab.unshift(elem);
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
    <div className="task" key={index}>
      <div>
        <input type="checkbox" onClick={handleOnClickCheckBox} />
        <p className={task[index].isValid === false && "crossed"}>
          {elem.name}
        </p>
      </div>
      <span onClick={handleOnClickTrash}>
        <FontAwesomeIcon icon="trash-alt" />
      </span>
    </div>
  );
};

export default Task;
