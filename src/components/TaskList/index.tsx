import { GenericComponent } from "../GenericComponent";
import { TittleDiv } from "../../Pages/styles";
import { TaskList } from "./styles";
import { useState } from "react";

export function TasksLister() {
  const [tasks, setNewTasks] = useState<number[]>([]);

  function handleCreateNewTask() {
    setNewTasks([...tasks, tasks.length + 1]);
  }

  return (
    <TaskList>
      <TittleDiv>
        <h2>Lista de Tarefas</h2>
        <button onClick={handleCreateNewTask}>
          <strong>+</strong>
        </button>
      </TittleDiv>
      <li>
        {tasks.map((tasks) => {
          return (
            <GenericComponent
              key={1}
              name="Dinosfauro"
              imgSrc="https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq"
            />
          );
        })}
      </li>
    </TaskList>
  );
}
