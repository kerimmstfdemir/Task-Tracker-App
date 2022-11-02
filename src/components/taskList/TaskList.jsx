import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";

const TaskList = ({ task, getTasks, isOpen }) => {

  const deleteTask = async (id) => {
    const url = "https://6360c56567d3b7a0a6b4ddc4.mockapi.io/tasktrackerapi/tasks";
    try {
      await axios.delete(`${url}/${id}`)
    } catch (error) {
      console.log(error)
    }
    getTasks();
  }
  
  return (
    <div className="tasks-area" style={{height: isOpen ? "16.7rem" : "31.8rem" ,overflow:"auto"}}>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between rounded-2 p-2 task"
            style={{ backgroundColor: "#B0C1D9", opacity: "0.95" }}
          >
            <div>
              <h4>{task}</h4>
              <p>{new Date(date).toLocaleDateString("tr-TR")}</p>
            </div>
            <div className="d-flex align-items-center">
              <AiTwotoneDelete
                style={{cursor: "pointer", marginRight: "1rem", fontSize: "2.1rem", boxShadow: "2px 2px 2px #ECEECE", color:"#8C0E03"}} onClick={() => deleteTask(id)}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
