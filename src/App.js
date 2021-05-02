import "./App.css";

// Import all components
import Header from "./Components/Header";
import Task from "./Components/Task";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

// Import useState
import { useState } from "react";

//Import Icons from FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faListAlt, faTrashAlt);

// ---------------------------------------------------------

function App() {
  //Declaration of states
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [task, setTask] = useState([
    { name: "Task example, now create your own !", isValid: true },
  ]);

  return (
    <div className={darkMode && "dark-mode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container">
        <div className={task.length > 7 && "two-columns"}>
          {task.map((elem, index) => {
            return (
              <Task index={index} elem={elem} task={task} setTask={setTask} />
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
