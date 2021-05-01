//Import Icons from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ index, elem, isValid, setIsValid, task, setTask }) => {
  // Declaration function used in the return
  const handleOnClickCheckBox = () => {
    const newIsValid = [...isValid];
    const newTaskTab = [...task];
    if (isValid[index]) {
      newIsValid[index] = false;
    } else {
      newIsValid[index] = true;
      // const indexTask = newTaskTab.indexOf(elem);
      // newTaskTab.splice(indexTask, 1);
      // newTaskTab.push(elem);
      // setTask(newTaskTab);
    }
    setIsValid(newIsValid);
  };

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
        <p className={isValid[index] === true && "crossed"}>{elem}</p>
      </div>
      <span onClick={handleOnClickTrash}>
        <FontAwesomeIcon icon="trash-alt" />
      </span>
    </div>
  );
};

export default Task;
