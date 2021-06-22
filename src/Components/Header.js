// Import tools
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "@material-ui/core/Switch";

const Header = ({ darkMode, setDarkMode }) => {
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div>
        <FontAwesomeIcon icon="list-alt" className="list-icon" />
        <h1>To Do List</h1>
      </div>
      <div>
        <h3 className={darkMode ? "dark-mode" : ""}>Light or Dark Mode</h3>
        <Switch
          onChange={handleChange}
          checked={darkMode}
          color="default"
          name="Dark mode/light mode switch"
        />
      </div>
    </header>
  );
};

export default Header;
