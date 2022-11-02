import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([])
  const url = "https://6360c56567d3b7a0a6b4ddc4.mockapi.io/tasktrackerapi/tasks";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  //? CRUD -READ-
  const getTasks = async () => {
    try {
      const { data } = await axios(url);
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, [])
  
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button 
      onClick={() => toggle()} 
      variant="success"
      size="lg">{text}</Button>
      {isOpen && <AddTask getTasks={getTasks}/>}
      <TaskList isOpen={isOpen} task={task} getTasks={getTasks}/>
    </div>
  );
};

export default Home;
