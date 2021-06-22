import "./App.css";

// Import all components
import Header from "./Components/Header";
import Task from "./Components/Task";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

// Import useState
import { useState, useEffect } from "react";

//Import Icons from FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faListAlt,
  faTrashAlt,
  faExclamationCircle,
  faExclamation,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faListAlt,
  faTrashAlt,
  faExclamationCircle,
  faExclamation,
  faCheckSquare,
  faSquare
);

// ---------------------------------------------------------

function App() {
  //Declaration of states
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        name: "Task example, now create your own !",
        isValid: true,
        isImportant: false,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container">
        <div className={task.length > 7 ? "two-columns" : ""}>
          {task.map((elem, index) => {
            return (
              <Task
                index={index}
                elem={elem}
                task={task}
                setTask={setTask}
                key={index}
              />
            );
          })}
        </div>
        <Search
          task={task}
          setTask={setTask}
          search={search}
          setSearch={setSearch}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
